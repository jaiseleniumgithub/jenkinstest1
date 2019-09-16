package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	WebDriver driver;

	@Given("^Open firefox and start application$")
	public void open_firefox_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C://drivers//chromedriver.exe");
	   driver = new ChromeDriver();
 	   driver.manage().window().maximize();
	   driver.get("http://www.facebook.com");
	}

	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_valid_and(String uname, String pass) throws Throwable {
	    
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("pass")).sendKeys(pass);
	}

	@Then("^user should able to login successfully$")
	public void user_should_able_to_login_successfully() throws Throwable {
		
		driver.findElement(By.id("loginbutton")).click();
	    	}
    

	@Then("^Close the browser$")
	public void Close_the_browser() throws Throwable {
		
		driver.close();
	    	}
}
