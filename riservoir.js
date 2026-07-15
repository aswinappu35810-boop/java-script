let ra = 4250
let rb = 9000
let rc = 9250

let ia = ra/0.85
let ib = ia * 2
let ic = ib - 500

let la=ia-ra
let lb=ib-rb
let lc=ic-rc

let t= ra + rb + rc
alert("Initial reservoir A: "+ia+" L\n"+"Initial reservoir B: "+ib+" L\n"+"Initial reservoir C: "+ic+" L\n"+"Water lost from reservoir A: "+la+" L\n"+"Water lost from reservoir B: "+lb+" L\n"+"Water removed from reservoir C: "+lc+" L\n"+"Final reservoir A: "+ra+" L\n"+"Final reservoir B: "+rb+" L\n"+"Final reservoir C: "+rc+" L\n"+"Total final water: "+t+" L")

