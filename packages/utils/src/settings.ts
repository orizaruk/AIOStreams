import dotenv from 'dotenv';
import path from 'path';

try {
  dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
} catch (error) {
  console.error('Error loading .env file:', error);
}

export class Settings {
  public static readonly ADDON_NAME = process.env.ADDON_NAME ?? 'AIOStreams';
  public static readonly ADDON_ID =
    process.env.ADDON_ID ?? 'aiostreams.viren070.com';
  public static readonly PORT = process.env.PORT ?? 3000;
  public static readonly BRANDING =
    process.env.BRANDING ?? process.env.NEXT_PUBLIC_ELFHOSTED_BRANDING;
  public static readonly SECRET_KEY = process.env.SECRET_KEY ?? '';
  public static readonly CUSTOM_CONFIGS = process.env.CUSTOM_CONFIGS
    ? JSON.parse(process.env.CUSTOM_CONFIGS)
    : {};
  public static readonly COMET_URL =
    process.env.COMET_URL ?? 'https://comet.elfhosted.com/';
  public static readonly MEDIAFUSION_URL =
    process.env.MEDIAFUSION_URL ?? 'https://mediafusion.elfhosted.com/';
  public static readonly MEDIAFUSION_API_PASSWORD =
    process.env.MEDIAFUSION_API_PASSWORD ?? '';
  public static readonly TORRENTIO_URL =
    process.env.TORRENTIO_URL ?? 'https://torrentio.strem.fun/';
  public static readonly TORBOX_STREMIO_URL =
    process.env.TORBOX_STREMIO_URL ?? 'https://stremio.torbox.app/';
  public static readonly EASYNEWS_URL =
    process.env.EASYNEWS_URL ??
    'https://ea627ddf0ee7-easynews.baby-beamup.club/';
  public static readonly EASYNEWS_PLUS_URL =
    process.env.EASYNEWS_PLUS_URL ??
    'https://b89262c192b0-stremio-easynews-addon.baby-beamup.club/';
  public static readonly ADDON_PROXY = process.env.ADDON_PROXY ?? '';
  public static readonly DEFAULT_MEDIAFLOW_URL =
    process.env.DEFAULT_MEDIAFLOW_URL ?? '';
  public static readonly DEFAULT_MEDIAFLOW_API_PASSWORD =
    process.env.DEFAULT_MEDIAFLOW_API_PASSWORD ?? '';
  public static readonly DEFAULT_MEDIAFLOW_PUBLIC_IP =
    process.env.DEFAULT_MEDIAFLOW_PUBLIC_IP ?? '';
  public static readonly MAX_ADDONS = process.env.MAX_ADDONS
    ? parseInt(process.env.MAX_ADDONS)
    : 15;
  public static readonly MAX_MOVIE_SIZE = process.env.MAX_MOVIE_SIZE
    ? parseInt(process.env.MAX_MOVIE_SIZE)
    : 161061273600; // 150GiB
  public static readonly MAX_EPISODE_SIZE = process.env.MAX_EPISODE_SIZE
    ? parseInt(process.env.MAX_EPISODE_SIZE)
    : 16106127360; // 15GiB
  public static readonly MAX_TIMEOUT = process.env.MAX_TIMEOUT
    ? parseInt(process.env.MAX_TIMEOUT)
    : 50000;
  public static readonly MIN_TIMEOUT = process.env.MIN_TIMEOUT
    ? parseInt(process.env.MIN_TIMEOUT)
    : 1000;
  public static readonly DEFAULT_TIMEOUT = process.env.DEFAULT_TIMEOUT
    ? parseInt(process.env.DEFAULT_TIMEOUT)
    : 15000;
  public static readonly DEFAULT_TORRENTIO_TIMEOUT = process.env
    .DEFAULT_TORRENTIO_TIMEOUT
    ? parseInt(process.env.DEFAULT_TORRENTIO_TIMEOUT)
    : 5000;
  public static readonly DEFAULT_TORBOX_TIMEOUT = process.env
    .DEFAULT_TORBOX_TIMEOUT
    ? parseInt(process.env.DEFAULT_TORBOX_TIMEOUT)
    : 15000;
  public static readonly DEFAULT_COMET_TIMEOUT = process.env
    .DEFAULT_COMET_TIMEOUT
    ? parseInt(process.env.DEFAULT_COMET_TIMEOUT)
    : 15000;
  public static readonly DEFAULT_MEDIAFUSION_TIMEOUT = process.env
    .DEFAULT_MEDIAFUSION_TIMEOUT
    ? parseInt(process.env.DEFAULT_MEDIAFUSION_TIMEOUT)
    : 15000;
  public static readonly DEFAULT_EASYNEWS_TIMEMOUT = process.env
    .DEFAULT_EASYNEWS_TIMEMOUT
    ? parseInt(process.env.DEFAULT_EASYNEWS_TIMEMOUT)
    : 15000;
  public static readonly DEFAULT_EASYNEWS_PLUS_TIMEMOUT = process.env
    .DEFAULT_EASYNEWS_PLUS_TIMEMOUT
    ? parseInt(process.env.DEFAULT_EASYNEWS_PLUS_TIMEMOUT)
    : 15000;
  public static readonly SHOW_DIE = process.env.SHOW_DIE
    ? process.env.SHOW_DIE === 'true'
    : true;
  public static readonly LOG_SENSITIVE_INFO = process.env.LOG_SENSITIVE_INFO
    ? process.env.LOG_SENSITIVE_INFO === 'true'
    : false;
}
