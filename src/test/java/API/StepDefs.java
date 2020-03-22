package API;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClientBuilder;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;
import java.util.Properties;


public class StepDefs {

    HttpClient httpClient = HttpClientBuilder.create().build();
    URIBuilder uriBuilder = new URIBuilder();
    HttpGet httpGet;
    HttpResponse response;
    ObjectMapper objectMapper = new ObjectMapper();
    Map<String, Object> deserializedObject;


    public StepDefs() throws URISyntaxException, IOException {
    }
    @Given("constucted Http client with parameters")
    public void constucted_Http_client_with_parameters(Map<String, String> parameters) throws URISyntaxException {
        uriBuilder.setScheme("https").setHost("reqres.in").setPath(parameters.get("endpoint")).setCustomQuery(parameters.get("query"));
        httpGet = new HttpGet(uriBuilder.build());
    }
    @And("I set custom headers")
    public void i_set_custom_headers(Map<String, String> headers) throws IOException {
        Properties properties = new Properties();
        properties.load(new FileInputStream(new File("configuration.properties")));
        String appJson = properties.getProperty("applicationJson");

        httpGet.setHeader("Accept", appJson);
        httpGet.setHeader("Content-Type",appJson);

    }
    @When("the user sends Get request")
    public void the_user_sends_Get_request() throws IOException {
        response = httpClient.execute(httpGet);
    }
    @Then("validates the status code is {int}")
    public void validates_the_status_code_is(int statusCode) {
        Assert.assertEquals(statusCode,response.getStatusLine().getStatusCode());
        System.out.println("The status code is: "+response.getStatusLine().getStatusCode());
    }
    @And("I validate the header is {string}")
    public void i_validate_the_header_is(String header) throws IOException {
        Assert.assertTrue(response.getEntity().getContentType().getValue().contains(header));
        System.out.println(response.getEntity().getContentType().getValue());

    }
    @And("I validate response contains attributes:")
    public void i_validate_response_contains_attributes(List<String> attributes) throws IOException {
        deserializedObject = objectMapper.readValue(response.getEntity().getContent(),
                new TypeReference<Map<String, Object>>(){});
        System.out.println("Response is: " + deserializedObject.toString());
        String responsePayLoad = deserializedObject.toString();
        for(String attribute:attributes){
            Assert.assertTrue(""+attribute + " does not exist in the response",responsePayLoad.contains(attribute));
        }
        System.out.println("ResponsePayLoad contains all attributes");
    }
    @And("I validate response attributes and values:")
    public void I_Validate_Response_Attributes_And_Values(Map<String, String> attributeValues) throws IOException {
        Map<String, Object> actualAttributeValues = (Map<String, Object>) deserializedObject;
        for(String key:attributeValues.keySet()){
            String expectedValue = attributeValues.get(key);
            String actualValue = actualAttributeValues.get(key).toString();
            Assert.assertEquals("Value of "+key + " is not the same, expected:" +expectedValue+
                    "but found "+actualValue , expectedValue, actualValue);
            System.out.println("Value at " +key + " is " +actualValue);
        }
        System.err.println("Response attributes are as expected");
    }

    @And("validate the data of first user")
    public void validateTheDataOfFirstUser(Map<String, Object> userValues) {
        List<Object> actualFirstValues = (List<Object>) deserializedObject.get("data");
        Map<String, Object> firstUserValues=(Map<String, Object>) actualFirstValues.get(0);
        System.out.println(firstUserValues);
        for(String key: userValues.keySet()){
            Assert.assertEquals(userValues.get(key).toString(), firstUserValues.get(key).toString());

        }
        System.out.println("The first user's values as expected");
    }
}
