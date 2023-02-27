const symbol = require('/node_modules/symbol-sdk')


const GENERATION_HASH = '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
const EPOCH = 1637848847
const XYM_ID = '3A8416DB2D53B6C8'
const NODE_URL = 'https://sym-test.opening-line.jp:3001'
const NET_TYPE = symbol.NetworkType.TEST_NET

const repo = new symbol.RepositoryFactoryHttp(NODE_URL)
const accountRepo = repo.createAccountRepository()
const tsRepo = repo.createTransactionRepository()


function LoadSSS(){
  console.log('LoadSSS');

  console.log(JSON.stringify(window.SSS));
  console.log(window.SSS);

  console.log(JSON.stringify(window.isAllowedSSS()));

  if(JSON.stringify(window.isAllowedSSS()))
  {
    console.log('SSS is Allowed');

    const address = window.SSS.activeAddress;
    const accountInfo = await accountRepo.getAccountInfo(address).toPromise();
    console.log(accounInfo);

  }else{
    console.log('SSS is NOT Allowed');
  }

}
