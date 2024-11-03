// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true); // Allow overwriting existing files
Config.setConcurrency(4); // Adjust based on your CPU cores
Config.setChromiumOpenGlRenderer("angle"); // Better performance for most Windows systems
