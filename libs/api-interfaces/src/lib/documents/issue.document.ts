export class IssueDocument {
  static collectionName = 'issues';

  priority: string;
  id: number;
  title: string;
  description: string;
  resolved: boolean;
}
