import { FeatureA202Response, FeatureADefaultResponse } from "./responses";

export interface Interface1 {
  post(): Promise<FeatureA202Response | FeatureADefaultResponse>;
}

export type Feature1Client = {
  path: { (path: "/feature1"): Interface1 }
}
