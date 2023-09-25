const esbuild = require('esbuild');

async function build() {
  try {
    const result = await esbuild.build({
      entryPoints: ['src/main.js'], // 入口文件路径
      outfile: 'dist/bundle.js', // 输出文件路径
      bundle: true, // 是否将所有模块打包成一个文件
      minify: true, // 是否压缩代码
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'] // 目标浏览器或环境
    });

    console.log('Build succeeded!');
  } catch (err) {
    console.error('Build failed:', err);
  }
}

build();
