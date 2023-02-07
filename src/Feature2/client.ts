import { FeatureB202Response, FeatureBDefaultResponse } from "./responses";

export interface Interface2 {
  post(): Promise<FeatureB202Response | FeatureBDefaultResponse>;
}

export type Feature1Client = {
  path: { (path: "/feature1"): Interface2 }
}
