export class Point {
  public id: number
  public name: string
  public lat: number
  public lon: number
  public isPassed: boolean
  public fragment: string
  public easter: Array<number> | null
  public easterHint: string | null

  constructor(id: number, name: string, lat: number, lon: number, isPassed: boolean, text ?: string, easter?: Array<number>, easterHint ?: string) {
    this.id = id
    this.name = name
    this.lat = lat
    this.lon = lon
    this.isPassed = isPassed
    this.fragment = text ?? ''
    this.easter = easter ?? null
    this.easterHint = easterHint ?? null
  }
}
