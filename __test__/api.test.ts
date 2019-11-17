import chiliReqBase from '../lib';

const chiliReq = chiliReqBase({
  baseURL:
    '***',
});

type methodType = "GET"
const method : methodType = "GET";

function getBanner() {
  return {
    option: {
      method,
      url: "/app/banner",
    },
  };
}

interface Res {
  code: string,
  msg: string,
  data: Record<string, string>
}

// NOTE: test suite
test('api', () => {
  return chiliReq<Res>(getBanner()).then(res => {
    expect(res).toEqual({
      code: '0',
      msg: '0',
      data: {
        name: 'nick',
      },
    });
  });
});
