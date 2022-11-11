import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'main.js',
  plugins: [commonjs(), vue()],
};
