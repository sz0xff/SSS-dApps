const sym = require('/node_modules/symbol-sdk');


const GENERATION_HASH = '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836';
const EPOCH = 1637848847;
const XYM_ID = '3A8416DB2D53B6C8';
const NODE_URL = 'https://sym-test-04.opening-line.jp:3001';
const NET_TYPE = sym.NetworkType.TEST_NET;

const repo = new sym.RepositoryFactoryHttp(NODE_URL);
const accountRepo = repo.createAccountRepository();
const tsRepo = repo.createTransactionRepository();


function LoadSSS(){
  console.log('LoadSSS');

  console.log(JSON.stringify(window.SSS));
  console.log(window.SSS);

  console.log(JSON.stringify(window.isAllowedSSS()));

  if(JSON.stringify(window.isAllowedSSS()))
  {
    console.log('SSS is Allowed');

    const address = window.SSS.activeAddress;

    myAddress = sym.Address.createFromRawAddress(
      window.SSS.activeAddress
    );
    console.log(myAddress);  

    (async() =>{
      const accountInfo = await accountRepo.getAccountInfo(myAddress).toPromise();
      console.log(accountInfo);

      const result = await txRepo.search(
        {
          group:sym.TransactionGroup.Confirmed,
          embedded:true,
          address:myAddress
        }
      ).toPromise();

      txes = result.data;
      txes.forEach(tx =>{
        console.log(tx);
      });
    })();







  }else{
    console.log('SSS is NOT Allowed');
  }

}
