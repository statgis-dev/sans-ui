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

// OpenStreetMap Official Vector Tile Styles via OpenFreeMap (Fast, Open, Zero API Key)
const OSM_VECTOR_STYLE = 'https://tiles.openfreemap.org/styles/bright';

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

  const [basemapType, setBasemapType] = useState<'vector' | 'satellite'>('vector');
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
    setBasemapType((prev) => (prev === 'vector' ? 'satellite' : 'vector'));
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

  return (
    <Stack gap="lg">
      <Card withBorder shadow="sm">
        <Card.Header>
          <Group justify="space-between" align="center" wrap="wrap">
            <div>
              <Title order={3} size="h4">OpenStreetMap Vector Controls</Title>
              <Text size="sm" color="dimmed">
                Modular, accessible MapLibre GL controls rendered over OpenStreetMap (OSM) vector tiles.
              </Text>
            </div>
            <Group gap="xs">
              <Badge variant="filled" color={basemapType === 'vector' ? 'primary' : 'success'}>
                {basemapType === 'vector' ? 'OSM VECTOR BASEMAP' : 'SATELLITE IMAGERY'}
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
                mapStyle={basemapType === 'vector' ? OSM_VECTOR_STYLE : SATELLITE_STYLE}
                onMove={handleMove}
                attributionControl={false}
                style={{ width: '100%', height: '100%' }}
              >
                {/* Top-Right Floating Controls Overlay */}
                <MapControlWrapper position="top-right" gap="sm">
                  <FullscreenControl containerRef={containerRef} />
                  <BasemapToggleControl
                    currentBasemap={basemapType}
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

            {geolocateStatus && (
              <Box bg="app" padding="sm" radius="md" border>
                <Text size="xs" color="dimmed">{geolocateStatus}</Text>
              </Box>
            )}

            {/* Quick Camera Presets */}
            <Stack gap="xs">
              <Text size="xs" weight={600} color="dimmed" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Camera FlyTo Presets & Gestures
              </Text>
              <Group gap="xs" wrap="wrap">
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
            </Stack>
          </Stack>
        </Card.Body>

        <Card.Footer>
          <Group justify="space-between" align="center">
            <Text size="xs" color="dimmed">
              Controls: Click Compass to reset North &bull; Drag Compass or hold Right-Click to tilt & rotate &bull; Scroll to Zoom
            </Text>
            <Button
              variant="outline"
              size="xs"
              color="primary"
              onClick={toggleBasemap}
            >
              Switch to {basemapType === 'vector' ? 'Satellite Imagery' : 'OpenStreetMap Vector'}
            </Button>
          </Group>
        </Card.Footer>
      </Card>
    </Stack>
  );
};
