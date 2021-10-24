export interface BusRoute {
  'odata.metadata': string;
  value: Value[];
}

export interface Value {
  ServiceNo: string;
  Operator: Operator;
  Direction: number;
  StopSequence: number;
  BusStopCode: string;
  Distance: number;
  WD_FirstBus: string;
  WD_LastBus: string;
  SAT_FirstBus: string;
  SAT_LastBus: string;
  SUN_FirstBus: string;
  SUN_LastBus: string;
}

export enum Operator {
  Sbst = 'SBST',
}
