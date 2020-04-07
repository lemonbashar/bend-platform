export class Page {
  constructor(
    public page?: number,
    public size?: number
  ) {
  }

  public static defaultPage(): Page {
    return new Page(0, 20);
  }
}
