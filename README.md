# Deploy Deno to Render

1. [Create a new repository](https://github.com/render-examples/deno/generate) from this template repository.
2. [Create a new web service](https://dashboard.render.com/select-repo?type=web) on Render from that repository.
3. Render should automatically select **Docker** as the **Environment**. You may select a different **Region**, **Branch**, or **Plan** if you wish. The **Free** plan works fine for this simple Deno server.
4. Click **Create Web Service**

That's it! Your Deno web service will be live on your Render URL as soon as the build and deploy finish.

Here's an [example deploy](https://deno-m8ib.onrender.com/) of the service.
