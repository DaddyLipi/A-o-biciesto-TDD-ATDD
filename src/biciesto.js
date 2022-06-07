function TestBiciesto(anio)
{
    let ans=0;
    if(anio!=0)
    {
        if(anio%4!=0)
        {
             ans=1;
        }
    }
    return ans;
}
export default TestBiciesto;