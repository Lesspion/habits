import { IConfig } from './Interface/IConfig'
import DBConfig from './DBConfig';
import ServerSettings from './ServerSettings';
import Uri from './Uri';
import StaticPlugins from './StaticPlugins';
import Assets from './Assets';

const env = process.env;

const Config : IConfig = {
    isProd: (env.NODE_ENV === "prod") ? true : false,
    DB: DBConfig,
    ServerSettings: ServerSettings,
    Uri: Uri,
    StaticPlugins: StaticPlugins,
    Assets: Assets
};

export default Config;