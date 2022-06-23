/* eslint-disable */
import sha256 from 'crypto-js/sha256';
import hex2ascii from 'hex2ascii';

export interface ITransaction {
  from: string;
  to: string;
  amount: string;
  cardDebited: string;
  accountNumberTo: string;
}

export class Block {
  private _hash: any;
  private _height: number;
  private _body: ITransaction;
  private _time: string;
  private _previousBlockHash: any;

  constructor(data: ITransaction) {
    this._hash = null;
    this._height = 0;
    this._body = data;
    this._time = '';
    this._previousBlockHash = '';
  }

  validate() {
    return true;
    /*const currentHash = this._hash;
    this._hash = sha256(JSON.stringify({ ...this, hash: null })).toString();
    console.log('-> currentHash', currentHash, this._hash);
    return currentHash === this._hash;*/
  }

  getBlockData() {
    const encodedData = this._body.toString();
    const decodedData = hex2ascii(encodedData);
    const dataObject = JSON.parse(decodedData);

    if (dataObject.data.length > 0) {
      return 'Block is not valid because is Genesis block';
    }
    return dataObject;
  }

  toString() {
    return `Block -
      Height: ${this._height}
      Hash: ${this._hash}
      Previous Block Hash: ${this._previousBlockHash}
      Body: ${this._body}
      Time: ${this._time}
      -----------------------------`;
  }

  /**
   * Getter previousBlockHash
   * @return {any}
   */
  public get previousBlockHash(): any {
    return this._previousBlockHash;
  }

  /**
   * Getter hash
   * @return {any}
   */
  public get hash(): any {
    return this._hash;
  }

  /**
   * Getter height
   * @return {number}
   */
  public get height(): number {
    return this._height;
  }

  /**
   * Getter body
   * @return {any}
   */
  public get body(): any {
    return this._body;
  }

  /**
   * Getter time
   * @return {string}
   */
  public get time(): string {
    return this._time;
  }

  /**
   * Setter hash
   * @param {any} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set hash(value: any) {
    this._hash = value;
  }

  /**
   * Setter height
   * @param {number} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set height(value: number) {
    this._height = value;
  }

  /**
   * Setter body
   * @param {any} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set body(value: any) {
    this._body = value;
  }

  /**
   * Setter time
   * @param {number} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set time(value: string) {
    this._time = value;
  }

  /**
   * Setter previousBlockHash
   * @param {any} value
   */
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public set previousBlockHash(value: any) {
    this._previousBlockHash = value;
  }
}
