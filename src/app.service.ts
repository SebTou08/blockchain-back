/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { Block, ITransaction } from './models/Block';
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
    if (this._blockChain.chain.length === 0) {
      const genesisData: ITransaction = {
        accountNumberTo: 'THIS IS GENEIS',
        amount: 'This is genesis',
        from: 'GENESIS',
        to: 'Genesis',
        cardDebited: 'GENESIS CARD',
      };

      const block = new Block(genesisData);
      this._blockChain.addBlock(block);
    }
  }

  createNewBlock(p_data: any) {
    console.log('%c⧭', 'color: #00a3cc', p_data + ' for service');
    const block = new Block(p_data);
    this._blockChain.addBlock(block);
  }
}
