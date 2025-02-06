// Why do I lose registered event handlers?
// Node.js allows extending existing services, for example in mashup scenarios. This is commonly done on bootstrap time in cds.on('served', ...) handlers like so:

// ------------------------------------------------------------------------------
//DO
// ------------------------------------------------------------------------------
cds.on('served', ()=>{
  const { db } = cds.services
  db.on('before',(req)=> console.log(req.event, req.path))
})

// It is important to note that by Node.js emit are synchronous operations, 
// so, avoid any await operations in there, 
// as that might lead to race conditions. In particular, 
//   when registering additional event handlers with a service, 
//   as shown in the snippet above, this could lead to very hard to detect and resolve issues with handler registrations. 
//   So, for example, don't do this:

// ------------------------------------------------------------------------------
//DON'T
// ------------------------------------------------------------------------------
cds.on('served', async ()=>{
  const db = await cds.connect.to('db') // DANGER: will cause race condition !!!
  db.on('before',(req)=> console.log(req.event, req.path))
})
