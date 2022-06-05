import { Injectable } from '@nestjs/common';
import { Block } from './models/Block';
import { Blockchain } from './models/Blockchain';

@Injectable()
export class AppService {
  private _blockChain = new Blockchain();

  getWholeBlockchain(): any {
    this.createExampleBlockchain();
    this._blockChain.logger();
    console.log('-> chainnnn', this._blockChain.chain.length);
    return this._blockChain;
  }

  createExampleBlockchain() {
    const block = new Block({ data: 'Genesis Block' });
    const block2 = new Block({ data: 'Block 2' });
    const block3 = new Block({ data: 'Block 3' });
    const block4 = new Block({ data: 'Block 4' });
    const block5 = new Block({ data: 'Block 5' });

    this._blockChain.addBlock(block);
    this._blockChain.addBlock(block2);
    this._blockChain.addBlock(block3);
    this._blockChain.addBlock(block4);
    this._blockChain.addBlock(block5);
  }

  createNewBlock(p_data: string) {
    const block = new Block({ data: p_data });
    this._blockChain.addBlock(block);
  }
}
