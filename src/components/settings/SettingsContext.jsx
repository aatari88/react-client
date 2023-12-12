import PropTypes from 'prop-types';
import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { defaultSettings } from './config-setting';
import { defaultPreset } from "./presets";

// ----------------------------------------------------------------------

const initialState = {
    ...defaultSettings,
    // Mode
    onToggleMode: () => {},
    onChangeMode: () => {},
    // Direction
    onToggleDirection: () => {},
    onChangeDirection: () => {},
    onChangeDirectionByLang: () => {},
    // Layout
    onToggleLayout: () => {},
    onChangeLayout: () => {},
    // Contrast
    onToggleContrast: () => {},
    onChangeContrast: () => {},
    // Color
    onChangeColorPresets: () => {},
    presetsColor: defaultPreset,
    presetsOption: [],
    // Stretch
    onToggleStretch: () => {},
    // Reset
    onResetSetting: () => {},
  };

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);

  // Layout
  const onToggleLayout = useCallback(() => {
    const themeLayout = settings.themeLayout === 'vertical' ? 'mini' : 'vertical';
    setSettings({ ...settings, themeLayout });
  }, [setSettings, settings]);

  // const onChangeLayout = useCallback(
  //   (event) => {
  //     const themeLayout = event.target.value;
  //     setSettings({ ...settings, themeLayout });
  //   },
  //   [setSettings, settings]
  // );

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      // Layout
      onToggleLayout,
      // onChangeLayout,
    }),
    [
      settings,
      onToggleLayout,
      // onChangeLayout
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}