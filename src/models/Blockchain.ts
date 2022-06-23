import sha256 = require('crypto-js/sha256');

import { Block, ITransaction } from './Block';

export class Blockchain {
  private _chain: any[];
  private _height: number;

  constructor() {
    this._chain = [];
    this._height = -1;
    this.initializeChain();
  }

  initializeChain() {
    const genesisData: ITransaction = {
      accountNumberTo: 'THIS IS GENEIS',
      amount: 'This is genesis',
      from: 'GENESIS',
      to: 'Genesis',
      cardDebited: 'GENESIS CARD',
    };

    if (this._height === -1) {
      const block = new Block(genesisData);
      this.addBlock(block);
    }
  }

  addBlock(newBlock: Block) {
    newBlock.height = this._chain.length;
    newBlock.time = new Date().getTime().toString();

    if (this._chain.length > 0) {
      newBlock.previousBlockHash = this._chain[this._chain.length - 1].hash;
    }

    const errors: Array<any> | any = this.validateChain();
    if (errors?.length > 0) {
      console.log('hay un error al añadir bloque');
      return errors;
    }

    newBlock.hash = sha256(JSON.stringify(newBlock)).toString();
    this._chain.push(newBlock);
    console.log('%c⧭', 'color: #ff0000', this._chain);
    console.log('se ha añadido el bloque');
    return newBlock;
  }

  validateChain() {
    const errors = [];
    this._chain.map((block: Block) => {
      try {
        const isValid = block.validate();
        if (!isValid) {
          errors.push(new Error('Block is not valid'));
        }
      } catch (err) {
        errors.push(err);
      }
    });
    return errors;
  }

  logger() {
    this._chain.forEach((block) => {
      console.log(block.toString());
    });
  }

  /**
   * Getter chain
   * @return {any[]}
   */
  public get chain(): any[] {
    return this._chain;
  }

  /**
   * Getter height
   * @return {number}
   */
  public get height(): number {
    return this._height;
  }

  /**
   * Setter chain
   * @param {any[]} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set chain(value: any[]) {
    this._chain = value;
  }

  /**
   * Setter height
   * @param {number} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set height(value: number) {
    this._height = value;
  }
}
