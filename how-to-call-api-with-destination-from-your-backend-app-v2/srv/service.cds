using myDbNamespace from '../db/schema';

//path means you wanna change the standard path name.
@path: '/service/myOwnService'

service myOwnService {

    entity MyTableName as projection on myDbNamespace.MyTableName;

    function mYProcessFunction() returns String; 
}
