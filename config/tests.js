import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';
import nock from 'nock';
import m from 'module';
import raf from 'raf';
import { configure } from 'enzyme';

const loader = m._load;

before(function () {
  chai.should();
  chai.use(chaiAsPromised);
  chai.use(sinonChai);
  nock.disableNetConnect();
});

configure({ adapter: new Adapter() });

m._load = function (request, parent, isMain) {
  if (request.match(/.jpeg|.jpg|.png$/)) return { uri: request };
  return loader(request, parent, isMain);
};

raf.polyfill(global);
