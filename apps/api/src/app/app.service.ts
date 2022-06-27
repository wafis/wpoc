import { Inject, Injectable } from '@nestjs/common';
import { Message } from '@wpoc/api-interfaces';
import { CollectionReference, Timestamp } from '@google-cloud/firestore';

@Injectable()
export class AppService {
  constructor(@Inject('issues') private issuesCollection: CollectionReference<any>) {
  }

  async getData(): Promise<any> {
    const snapshot = await this.issuesCollection.get();
    const issues: any[] = [];
    snapshot.forEach(doc => console.log(doc))
    snapshot.forEach(doc => issues.push(doc.data()));
    console.log(issues)
    return issues;
  }
}
