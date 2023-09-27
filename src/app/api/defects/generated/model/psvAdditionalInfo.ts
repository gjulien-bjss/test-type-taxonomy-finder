/**
 * Defect Microservice
 * This is the API spec for retrieving all defects. These defects will be stored locally on the VSAs mobile device. Authorization details will be updated once we have confirmed the security scheme we are using.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: mdclarke@deloitte.co.uk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PsvAdditionalInfoLocation } from './psvAdditionalInfoLocation';


export interface PsvAdditionalInfo { 
    location?: PsvAdditionalInfoLocation;
    notes?: boolean;
}

