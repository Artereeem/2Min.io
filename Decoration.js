
function onEntry(entry) 
{
    entry.ForEach(change=>
    {
        if (change.isIntersecting)
            {
                change.target.classlist.add('element-show');
            }
        else
        {
            change.target.classlist.remove('.element-show')
        }
    });
}
let options = 
{
    threshold:[0.5]
};
let observer = new
IntersectionObserver(onEntry,options);
let elements =
document.querySelectorAll('.element-animation');

for (let elm of elements)
    {
        observer.observe(elm);
    }