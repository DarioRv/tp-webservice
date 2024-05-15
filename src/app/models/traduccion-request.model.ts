export class TraduccionRequest {
  source: string;
  target: string;
  q: string;

  constructor(source: string = 'en', target: string = 'es', q: string = '') {
    this.source = source;
    this.target = target;
    this.q = q;
  }
}
