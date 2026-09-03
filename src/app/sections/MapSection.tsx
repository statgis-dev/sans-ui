import React, { useRef, useState, useCallback } from 'react';
import { Map, MapRef, ViewStateChangeEvent } from 'react-map-gl/maplibre';
import {
  Card,
  Title,
  Text,
  Stack,
  Group,
  Badge,
  Button,
  Box,
} from '../../';
import {
  DefaultViewControl,
  GeolocateControl,
  ZoomControlGroup,
  BasemapToggleControl,
  CompassControl,
  FullscreenControl,
  MapControlWrapper,
} from '../../components/map';

// 1. CARTO Voyager Vector Basemap (Powered by OpenStreetMap data, high reliability, zero API key)
const OSM_VECTOR_STYLE = 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json';

// 2. OpenStreetMap Standard Raster Basemap (Direct OSM tile servers)
const OSM_STANDARD_RASTER_STYLE = {
  version: 8 as const,
  sources: {
    'osm-tiles': {
      type: 'raster' as const,
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm-tiles-layer',
      type: 'raster' as const,
      source: 'osm-tiles',
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

// 3. Esri World Imagery Satellite Raster Basemap
const SATELLITE_STYLE = {
  version: 8 as const,
  sources: {
    'esri-satellite': {
      type: 'raster' as const,
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      ],
      tileSize: 256,
      attribution: 'Tiles &copy; Esri',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'esri-satellite-layer',
      type: 'raster' as const,
      source: 'esri-satellite',
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

type BasemapMode = 'vector' | 'satellite' | 'osm-raster';

const PRESETS = [
  { name: 'New York', center: [-74.006, 40.7128] as [number, number], zoom: 12, pitch: 45, bearing: -20 },
  { name: 'London', center: [-0.1278, 51.5074] as [number, number], zoom: 12, pitch: 30, bearing: 15 },
  { name: 'Tokyo', center: [139.6917, 35.6895] as [number, number], zoom: 12, pitch: 50, bearing: 40 },
  { name: 'Paris', center: [2.3522, 48.8566] as [number, number], zoom: 12, pitch: 35, bearing: -10 },
  { name: 'San Francisco', center: [-122.4194, 37.7749] as [number, number], zoom: 12, pitch: 40, bearing: 25 },
];

export const MapSection: React.FC = () => {
  const mapRef = useRef<MapRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [basemapMode, setBasemapMode] = useState<BasemapMode>('vector');
  const [mapError, setMapError] = useState<string | null>(null);
  const [viewState, setViewState] = useState({
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 11,
    pitch: 0,
    bearing: 0,
  });

  const [geolocateStatus, setGeolocateStatus] = useState<string | null>(null);

  const handleMove = useCallback((evt: ViewStateChangeEvent) => {
    setViewState(evt.viewState);
  }, []);

  const toggleBasemap = () => {
    setBasemapMode((prev) => (prev === 'vector' ? 'satellite' : 'vector'));
  };

  const flyToPreset = (preset: typeof PRESETS[0]) => {
    mapRef.current?.flyTo({
      center: preset.center,
      zoom: preset.zoom,
      pitch: preset.pitch,
      bearing: preset.bearing,
      essential: true,
    });
  };

  // Resolve current active MapLibre style
  const activeMapStyle =
    basemapMode === 'vector'
      ? OSM_STANDARD_RASTER_STYLE
      : SATELLITE_STYLE;

  return (
    <Stack gap="lg">
      <Card withBorder shadow="sm">
        <Card.Header>
          <Group justify="space-between" align="center" wrap="wrap">
            <div>
              <Title order={3} size="h4">Map Control Widgets</Title>
              <Text size="sm" color="dimmed">
                Modular, accessible MapLibre GL controls rendered over OpenStreetMap (OSM) vector & satellite tiles.
              </Text>
            </div>
            <Group gap="xs">
              <Badge
                variant="filled"
                color={basemapMode === 'vector' ? 'primary' : basemapMode === 'satellite' ? 'success' : 'warning'}
              >
                {basemapMode === 'vector'
                  ? 'OSM VOYAGER VECTOR'
                  : basemapMode === 'satellite'
                    ? 'ESRI SATELLITE'
                    : 'OSM STANDARD RASTER'}
              </Badge>
              <Badge variant="light" color="neutral">
                Zoom: {viewState.zoom.toFixed(1)}
              </Badge>
              <Badge variant="light" color="neutral">
                Pitch: {Math.round(viewState.pitch)}&deg;
              </Badge>
              <Badge variant="light" color="neutral">
                Bearing: {Math.round(viewState.bearing)}&deg;
              </Badge>
            </Group>
          </Group>
        </Card.Header>

        <Card.Body>
          <Stack gap="md">
            {/* Interactive Map Container */}
            <div
              ref={containerRef}
              style={{
                position: 'relative',
                width: '100%',
                height: '480px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-inner, inset 0 2px 4px rgba(0,0,0,0.06))',
              }}
            >
              <Map
                ref={mapRef}
                initialViewState={{
                  longitude: -74.006,
                  latitude: 40.7128,
                  zoom: 11,
                  pitch: 0,
                  bearing: 0,
                }}
                mapStyle={activeMapStyle}
                onMove={handleMove}
                attributionControl={false}
                onError={(e) => {
                  console.error('[MapLibre Error]:', e.error);
                  setMapError(e.error?.message || 'Map tile or style loading error');
                }}
                onLoad={() => {
                  console.log('[MapLibre]: Map loaded successfully');
                  setMapError(null);
                }}
                style={{ width: '100%', height: '100%' }}
              >
                {/* Top-Right Floating Controls Overlay */}
                <MapControlWrapper position="top-right" gap="sm">
                  <FullscreenControl containerRef={containerRef} />
                  <BasemapToggleControl
                    currentBasemap={basemapMode === 'satellite' ? 'satellite' : 'vector'}
                    onToggle={toggleBasemap}
                  />
                  <DefaultViewControl
                    center={[-74.006, 40.7128]}
                    zoom={11}
                    pitch={0}
                    bearing={0}
                  />
                  <GeolocateControl
                    zoom={14}
                    onGeolocate={(coords) => {
                      setGeolocateStatus(`Located at ${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`);
                    }}
                    onError={(err) => {
                      setGeolocateStatus(`Geolocation error: ${err.message}`);
                    }}
                  />
                  <CompassControl />
                  <ZoomControlGroup />
                </MapControlWrapper>
              </Map>
            </div>

            {/* Error Diagnostics Box */}
            {mapError && (
              <Box bg="danger" padding="sm" radius="md" border>
                <Group justify="space-between" align="center">
                  <Text size="xs" color="danger">
                    <strong>Map Diagnostics:</strong> {mapError}
                  </Text>
                  <Button size="xs" variant="outline" color="danger" onClick={() => setBasemapMode('osm-raster')}>
                    Switch to OSM Raster Fallback
                  </Button>
                </Group>
              </Box>
            )}

            {geolocateStatus && (
              <Box bg="app" padding="sm" radius="md" border>
                <Text size="xs" color="dimmed">{geolocateStatus}</Text>
              </Box>
            )}

            {/* Basemap Switcher Pills & Camera Presets */}
            <Group justify="space-between" align="center" wrap="wrap">
              <Group gap="xs" align="center">
                <Text size="xs" weight={600} color="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Basemap Layers:
                </Text>
                <Button
                  size="xs"
                  variant={basemapMode === 'vector' ? 'filled' : 'outline'}
                  color={basemapMode === 'vector' ? 'primary' : 'neutral'}
                  onClick={() => setBasemapMode('vector')}
                >
                  OSM Vector (Voyager)
                </Button>
                <Button
                  size="xs"
                  variant={basemapMode === 'satellite' ? 'filled' : 'outline'}
                  color={basemapMode === 'satellite' ? 'primary' : 'neutral'}
                  onClick={() => setBasemapMode('satellite')}
                >
                  Esri Satellite
                </Button>
                <Button
                  size="xs"
                  variant={basemapMode === 'osm-raster' ? 'filled' : 'outline'}
                  color={basemapMode === 'osm-raster' ? 'primary' : 'neutral'}
                  onClick={() => setBasemapMode('osm-raster')}
                >
                  OSM Standard (Raster)
                </Button>
              </Group>

              <Group gap="xs" align="center">
                <Text size="xs" weight={600} color="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  FlyTo:
                </Text>
                {PRESETS.map((p) => (
                  <Button
                    key={p.name}
                    variant="light"
                    color="neutral"
                    size="xs"
                    onClick={() => flyToPreset(p)}
                  >
                    {p.name}
                  </Button>
                ))}
              </Group>
            </Group>
          </Stack>
        </Card.Body>

        <Card.Footer>
          <Group justify="space-between" align="center">
            <Text size="xs" color="dimmed">
              Controls: Click Compass to reset North &bull; Drag Compass needle or hold Right-Click to tilt & rotate &bull; Scroll to Zoom
            </Text>
            <Button
              variant="outline"
              size="xs"
              color="primary"
              onClick={toggleBasemap}
            >
              Switch to {basemapMode === 'vector' ? 'Satellite Imagery' : 'OSM Vector Map'}
            </Button>
          </Group>
        </Card.Footer>
      </Card>
    </Stack>
  );
};
