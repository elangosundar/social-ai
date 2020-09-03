# Social-AI

`Social-AI` is a `Github action` automatically add your social icons or profiles in your `README.MD` file without hassle.
It will helps without copy pasting the social icons from icons website and less configurations.

# Demo
[SocialAIDemo](https://github.com/elangosundar/social-ai-test)

# Usage 

 - `social-icons` - To add your social icons, you will pass `socialName` and your social `userName`. I have provide the example as below.

```
- name: add social icons
  uses: elangosundar/social-ai@master
  with:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    social-icons: '[ { "socialName": "twitter", "userName": "elango_sundar"}, { "socialName": "facebook", "userName": "elango_sundar"}, { "socialName": "dev-dot-to", "userName": "elango_sundar"}, { "socialName": "codesandbox", "userName": "elango_sundar"},{ "socialName": "stackoverflow", "userName": "elango_sundar"}, { "socialName": "youtube", "userName": "elango_sundar"}]'
```

# Inputs

- `GITHUB_TOKEN` - A personal Github token.
- `social-icons` - Add your social name and it is username to add your README. [ Eg: If you will add social icon for twitter, will pass the `socialName` as `twitter` and `userName` as `YOUR_USERNAME`]

# Available Social Icons

- github
- twitter
- dev-dot-to
- codepen
- codesandbox
- stackoverflow
- linkedin
- kaggle
- facebook
- instagram
- dribbble
- behance
- medium
- youtube

# :heart: Support the project

Contributions are welcomed! <3

Made with :heart: and JavaScript.
