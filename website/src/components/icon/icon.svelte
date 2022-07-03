<script>
    export let slug;
    let iconPromise = getIcon(slug);

    function getIcon(slug){
        const svgUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${slug}.svg`
        const res =  fetch(svgUrl).then((response) => {
            return response;
        }).catch((ex)=>{
            console.log('logo not found',ex)
        })
        return res;
    }

    

    let techsNames = new Object();

    techsNames = {
        'nodedotjs': 'Node.js',
        'amazonaws': 'Amazon AWS',
        'amazonrds': 'AWS RDS',
        'typeorm': 'TypeORM',
        'express': 'Express',
        'postgresql': 'Postgresql',
        'react': 'React',
        'amazoneks': 'AWS EKS',
        'nestjs': 'Nestjs',
        'auroradb': 'AWS Auroradb',
        'reactNative': 'Reactive Native',
        'jira': 'Jira',
        'typescript': 'Typescript',
        'awslambda': 'AWS Lambda',
        'fastify': 'Fastify',
        'vtex': 'Vtex',
        'amazonec2': 'AWS EC2',
        'amazondynamodb': 'AWS DynamoDB',
        'cuprum': 'AFP Cuprum',
        'burgerKing': 'Buerger King',
        'cencosud': 'Cencosud',
        'alsea': 'Alsea',
        'witi': 'WiTI',
        'ionic': 'Ionic',
        'csharp': 'C#',
        'python': 'Python',
        'micropython': 'MicroPython',
        'visualstudiocode': 'VS Code',
        'visualstudio': 'Visual Studio',
        'microsoftsqlserver': 'Microsoft SQL Server',
        'bancoBci': 'Banco BCI'
    }
</script>
<div class="flex flex-col items-center self-center">
    {#await iconPromise }
        <p>Icon</p>
    {:then response}
        {#if response.status == 200}
        <div class="icon text-white dark:bg-oxford" style="mask: url({response.url}) no-repeat center / contain;-webkit-mask: url({response.url}) no-repeat center / contain;"></div>
        <span class="text-xs">{techsNames[slug] ? techsNames[slug]: ''}</span>
        {/if}
        {#if response.status !== 200 }
            <span class="text-sm">{techsNames[slug] ? techsNames[slug]: slug}</span> 
        {/if}
    {:catch err}
    {/await}
</div>


<style>
    .icon {
    width: 35px;
    height: 35px;
    margin-top: 2px;
    }
</style>