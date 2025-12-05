export enum AppStage {
  OPENING = 0,
  GREETING = 1,
  GIFTS = 2,
  PROMISE = 3
}

export interface GiftItem {
  id: number;
  iconName: string;
  title: string;
  description: string;
}