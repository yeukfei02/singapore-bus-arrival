export interface BusStopCode {
  'odata.metadata': string;
  value: Value[];
}

export interface Value {
  BusStopCode: string;
  RoadName: string;
  Description: string;
  Latitude: number;
  Longitude: number;
}
