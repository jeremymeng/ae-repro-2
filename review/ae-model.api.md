## API Report File for "ae-model"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

declare namespace Client {
    export {
        Interface1,
        Feature1Client
    }
}

declare namespace Client_2 {
    export {
        Interface2,
        Feature1Client_2 as Feature1Client
    }
}

// @public (undocumented)
type Feature1Client = {
    path: {
        (path: "/feature1"): Interface1;
    };
};

// @public (undocumented)
type Feature1Client_2 = {
    path: {
        (path: "/feature1"): Interface2;
    };
};

declare namespace FeatureA {
    export {
        Responses,
        Client
    }
}
export { FeatureA }

// @public (undocumented)
interface FeatureA202Response {
    // (undocumented)
    status: "202";
}

// @public (undocumented)
interface FeatureADefaultResponse {
    // (undocumented)
    body: Error;
    // (undocumented)
    status: string;
}

declare namespace FeatureB {
    export {
        Responses_2 as Responses,
        Client_2 as Client
    }
}
export { FeatureB }

// @public (undocumented)
interface FeatureB202Response {
    // (undocumented)
    status: "202";
}

// @public (undocumented)
interface FeatureBDefaultResponse {
    // (undocumented)
    body: Error;
    // (undocumented)
    status: string;
}

// @public (undocumented)
interface Interface1 {
    // (undocumented)
    post(): Promise<FeatureA202Response | FeatureADefaultResponse>;
}

// @public (undocumented)
interface Interface2 {
    // (undocumented)
    post(): Promise<FeatureB202Response | FeatureBDefaultResponse>;
}

declare namespace Responses {
    export {
        FeatureA202Response,
        FeatureADefaultResponse
    }
}

declare namespace Responses_2 {
    export {
        FeatureB202Response,
        FeatureBDefaultResponse
    }
}

// (No @packageDocumentation comment for this package)

```
