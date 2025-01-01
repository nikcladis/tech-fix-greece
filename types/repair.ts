export type DeviceType = 'smartphone' | 'laptop' | 'tablet';
export type BrandType = 'apple' | 'samsung' | 'huawei' | 'xiaomi' | 'lenovo' | 'hp' | 'dell';

export interface RepairIssue {
  id: string;
  name: string;
  description: string;
  estimatedCost: {
    min: number;
    max: number;
  };
  estimatedTime: string;
}

export interface DeviceBrand {
  id: BrandType;
  name: string;
  models: string[];
}

export interface EstimateFormData {
  deviceType: DeviceType;
  brand: BrandType;
  model: string;
  issues: string[];
  description?: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
}