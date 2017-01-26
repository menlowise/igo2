import { Layer } from './layer.model';
import { TileLayerOptions } from './layer-tile.interface';

export class TileLayer extends Layer {
  olLayer: ol.layer.Tile;

  createOlLayer(options: TileLayerOptions): ol.layer.Tile {
    const olLayerOptions = Object.assign(options.view || {}, {
      source: new ol.source.Tile(options.source)
    });

    return new ol.layer.Tile(olLayerOptions);
  }

  constructor(options: TileLayerOptions) {
    super(options);
  }
}