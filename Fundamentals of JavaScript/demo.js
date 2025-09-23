let ranNum = [11,33,72,90,81,22,21];
let max = ranNum[0];
let min = ranNum[0];

    for(const element of ranNum)
        {
            console.log(element);

                if(element > max)
                    {
                        max = element;
                    }
                
                if(element < min)
                    {
                        min = element;
                    }
               
        }

    console.log('This is min: ' + min + ' This is max: ' + max)
