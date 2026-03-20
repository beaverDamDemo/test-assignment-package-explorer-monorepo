export interface PackageSummary {
  id: string;
  weeklyDownloads: number;
  dependencyCount: number;
}

export interface PackageInfo extends PackageSummary {
  weeklyDownloads: number;
  dependencyCount: number;
  dependencies: string[];
}
