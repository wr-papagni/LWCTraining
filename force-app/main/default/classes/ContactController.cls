/**
 * Created by papagni on 04/05/2021.
 */

public with sharing class ContactController {
	@AuraEnabled(cacheable=true)
	public static Contact getSingleContact() {
		return [
			SELECT Id, Name, Title, Phone, Email
			FROM Contact
			WITH SECURITY_ENFORCED
			LIMIT 1
		];
	}
}