#!/usr/bin/env node

import { Command } from "commander";
import pkg from '../package.json'

const program = new Command();
program.version(pkg.version)


program.command('hello [name]').description('打招呼').alias('h').option('-e, --exclude <globPatters...>', '排除某些文件进行扫描').option('--allow-dirty', '默认屏蔽以下目录(node_modules,.git等), 可以设置允许').action((name, options) => {
    console.log('你好', name, options.exclude, options.allowDirty)
})

program.parse(process.argv)