export interface BusService {
  'odata.metadata': string;
  value: Value[];
}

export interface Value {
  ServiceNo: string;
  Operator: Operator;
  Direction: number;
  Category: Category;
  OriginCode: string;
  DestinationCode: string;
  AM_Peak_Freq: string;
  AM_Offpeak_Freq: string;
  PM_Peak_Freq: string;
  PM_Offpeak_Freq: string;
  LoopDesc: string;
}

export enum Category {
  CityLink = 'CITY_LINK',
  Express = 'EXPRESS',
  Feeder = 'FEEDER',
  Industrial = 'INDUSTRIAL',
  The2TierFlatFare = '2-TIER FLAT FARE',
  Trunk = 'TRUNK',
}

export enum Operator {
  Gas = 'GAS',
  Sbst = 'SBST',
}
