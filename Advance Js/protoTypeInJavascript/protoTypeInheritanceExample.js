var job=function(){
    this.pays=true;
};
//prototype method
job.prototype.print=function(){
    console.log(this.pays ? 'Please hire me': 'no thank you');
};
//subclass
var techJob=function(title,pays)
{
    job.call(this);
    this.title=title;
    this.pays=pays;
};
techJob.prototype=Object.create(job.prototype);
techJob.prototype.constructor=techJob;
techJob.prototype.print=function(){
    console.log(this.pays ? this.title + '  job is great hire me' : ' I would rather learn javaScript');
};
var softwarePosition=new techJob('javaScript Programmer',true);
var softwarePosition2=new techJob('vb Programmer',false);

console.log(softwarePosition.print());
console.log(softwarePosition2.print());


