const oci = require('oci-sdk');
const ociCommon = require('oci-common');
require('dotenv').config();


const ociAuth = new ociCommon.ConfigFileAuthenticationDetailsProvider();

const osClient = new oci.objectstorage.ObjectStorageClient({authenticationDetailsProvider:ociAuth});

console.log("node-oci-automation program initialized...");

async function getObject(osClient, bktName, objName) {
    try {
        console.log("Getting OCI OS Namespace...");
        const request = {};
        const nsResponse = await osClient.getNamespace(request);
        const namespace = nsResponse.value;
        console.log('OCI OS Namespace:', namespace);

        
        const bucketName = bktName;

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + '06';
        console.log('Date time:', today);

        const objectName = objName;
        console.log('Object Name:', objName);

        const getObjectRequest = {
            objectName: objName,
            bucketName: bktName,
            namespaceName: namespace,
            httpResponseContentEncoding: null
        };

        const getObjectResponse = await osClient.getObject(getObjectRequest);
        console.log("Get Object executed...");
        console.log("Object Data:", getObjectResponse);

        console.log("Swifting through getObjectResponse...");
        console.log(getObjectResponse);

        // TODO: Parse Object Storage Response for signals
        console.log("Deserializing Object Response...");
        console.log(getObjectResponse.value);
        */

    } catch (e) {
        console.log("Error:", e);
    }
};
