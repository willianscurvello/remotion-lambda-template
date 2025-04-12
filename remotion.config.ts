// remotion.config.ts
import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg"); // substitui o antigo setImageFormat()
Config.setCodec("h264");
Config.setTimeoutInMilliseconds(120000); // opcional
