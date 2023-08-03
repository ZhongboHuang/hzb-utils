import{_ as s,v as a,b as n,R as p}from"./chunks/framework.38c70500.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"temp/hzb-utils-box.api.md","filePath":"temp/hzb-utils-box.api.md"}'),o={name:"temp/hzb-utils-box.api.md"},l=p(`<h2 id="api-report-file-for-hzb-utils-box" tabindex="-1">API Report File for &quot;hzb-utils-box&quot; <a class="header-anchor" href="#api-report-file-for-hzb-utils-box" aria-label="Permalink to &quot;API Report File for &quot;hzb-utils-box&quot;&quot;">​</a></h2><blockquote><p>Do not edit this file. It is a report generated by <a href="https://api-extractor.com/" target="_blank" rel="noreferrer">API Extractor</a>.</p></blockquote><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// @public</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">array_unique</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">arr</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[])</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">[];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// @public</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is_number</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">n</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">n</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// @public</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is_object</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">o</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">o</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Exclude</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">object</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// (No @packageDocumentation comment for this package)</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#008000;">// @public</span></span>
<span class="line"><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">array_unique</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">T</span><span style="color:#000000;">&gt;(</span><span style="color:#001080;">arr</span><span style="color:#000000;">: </span><span style="color:#267F99;">T</span><span style="color:#000000;">[]): </span><span style="color:#267F99;">T</span><span style="color:#000000;">[];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">// @public</span></span>
<span class="line"><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">is_number</span><span style="color:#000000;">(</span><span style="color:#001080;">n</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#001080;">n</span><span style="color:#000000;"> </span><span style="color:#0000FF;">is</span><span style="color:#000000;"> </span><span style="color:#267F99;">number</span><span style="color:#000000;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">// @public</span></span>
<span class="line"><span style="color:#AF00DB;">export</span><span style="color:#000000;"> </span><span style="color:#0000FF;">function</span><span style="color:#000000;"> </span><span style="color:#795E26;">is_object</span><span style="color:#000000;">(</span><span style="color:#001080;">o</span><span style="color:#000000;">: </span><span style="color:#267F99;">any</span><span style="color:#000000;">): </span><span style="color:#001080;">o</span><span style="color:#000000;"> </span><span style="color:#0000FF;">is</span><span style="color:#000000;"> </span><span style="color:#267F99;">Exclude</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">object</span><span style="color:#000000;">, </span><span style="color:#267F99;">Array</span><span style="color:#000000;">&lt;</span><span style="color:#267F99;">any</span><span style="color:#000000;">&gt;&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#008000;">// (No @packageDocumentation comment for this package)</span></span></code></pre></div>`,3),e=[l];function t(c,r,y,i,E,F){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{b as __pageData,d as default};
