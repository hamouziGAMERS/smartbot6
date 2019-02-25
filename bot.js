const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'a7a') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
  if (msg.content === 'احا') {
    msg.reply('نكت امك في بتعها!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kos omk') {
    msg.reply('nakt✌umuk!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Kos omk') {
    msg.reply('nakt✌umuk!');
  }
});

client.on('message', msg => {
  if (msg.content === 'يعرص هنيكك') {
    msg.reply('كس اختك Ȼ!');
  }
});

client.on('message', msg => {
  if (msg.content === 'يعرص هنيكك') {
    msg.reply('انا نكت امك يلاا شفلك كلبه𝟝!');
  }
});



client.on('message', msg => {
  if (msg.content === 'تعاالي مصمص') {
    msg.reply('في كسمك ابعبص!');
  }
});


client.on('message', msg => {
  if (msg.content === '55555') {
    msg.reply('احترم نفسك يا كسمك!');
  }
});

client.on('message', msg => {
  if (msg.content === 'كسمك') {
    msg.reply('احترم نفسك يا كسمك!');
  }
});


client.on('message', msg => {
  if (msg.content === 'ابن متناكه') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
  if (msg.content === 'يا عرص') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
if (msg.content === 'يا ابن شرموطه') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
if (msg.content === 'يا ابن عاهره ') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
 if (msg.content === 'يا ابن قحبة  ') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
  if (msg.content === ' يا ابن مَرَة ') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});


client.on('message', msg => {
  if (msg.content === 'يا متناك') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
  if (msg.content === 'هنيكك') {
    msg.reply('🔞احترم نفسك يا كسمك!🚫');
  }
});

client.on('message', msg => {
  if (msg.content === 'TIGER') {
    msg.reply('نعم عاوز ايه ');
  }
});


client.on('message', msg => {
  if (msg.content === 'tiger') {
    msg.reply('😎خور يلاا بطلت انيك عيل🔞');
  }
});

client.on('message', msg => {
  if (msg.content === 'BemOo') {
    msg.reply('10 وهرد عليك');
  }
});

client.on('message', msg => {
  if (msg.content === 'bemoo') {
    msg.reply('10 وهرد عليك');
  }
});

client.on('message', msg => {
  if (msg.content === 'Galal') {
    msg.reply('yes?');
  }
});

client.on('message', msg => {
  if (msg.content === 'جلال') {
    msg.reply('yes?');
  }
});





client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });





     client.on('message',async msg => {
          if(msg.channel.type === "dm") return;
               var p = "#";
       if(msg.author.bot) return;
       if(msg.content.startsWith(p + "setvoice")) {
       if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **لا تملك رتبه لذلك**');
       if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
       var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
                var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                     var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                        var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
            al.setParent(kk);
            alp.setParent(kk);
            alph.setParent(kk);

          al.overwritePermissions(msg.guild.id, {
           CONNECT: false,
           SPEAK: false
         });
          alp.overwritePermissions(msg.guild.id, {
           CONNECT: false,
           SPEAK: false
         });
          alph.overwritePermissions(msg.guild.id, {
           CONNECT: false,
           SPEAK: false
         });
       setInterval(() => {
           var currentTime = new Date(),
     hours = currentTime.getHours() + 0 ,
     minutes = currentTime.getMinutes(),
     Seconds = currentTime.getSeconds(),
     Year = currentTime.getFullYear(),
     Month = currentTime.getMonth() + 1,
     Dat = currentTime.getDate()
     if (minutes < 10) {
     minutes = "0" + minutes;
     }
     var suffix = "AM";
     if (hours >= 12) {
     suffix = "PM";
     hours = hours - 12;
     }
     if (hours == 0) {
     hours = 12;
     }
          al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
           alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
             alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
      },1000);
                        })

                     })
                })
       })

       }

     });













     client.on('message' , async message => {
                 if(message.content.startsWith(prefix + "ads")) {
          await message.channel.send("`ارسال الرساله .`").then(e => {
         let filter = m => m.author.id === message.author.id
         let tests = '';
         let time = '';
         let channel = '';
         let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
         .then(collected => {
           tests = collected.first().content
           collected.first().delete()
     e.edit("`تكرار الرساله كل ....... دقائق`")
     let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
     .then(co => {
     if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
     if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
       time = co.first().content
     co.first().delete()
       e.edit("`ادخل اسم الروم`")
       let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
     .then(col => {
       channel = col.first().content
     col.first().delete()
       e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
                   setTimeout(() => {
         b.edit(`** تم اعداد المعلومات بنجاح .**`)
             },2000);
       })
       var room = message.guild.channels.find('name' , channel)
       if(!room) return;
       if (room) {
     setInterval(() => {
     room.send(tests);
     }, time*60000)
       }
     })
     })
     })

     })
     }
     });





     client.on("guildMemberAdd", msg => {
       var AlphaE = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setAuthor(msg.user.username, msg.user.avatarURL)
     .setThumbnail(msg.user.avatarURL)
     .setTitle(`
     مرحبا بك في السيرفر
     نتمى ان تدخل الي السيرفر
     `)
     .addField("هذي الرساله خاصه بك يا حبيبي", `${msg.user.tag}`, true)
     .addField(`https://discord.gg/ccrKyvf`,`Link`, true)
      .setFooter(msg.user.tag, msg.user.avatarURL, true)
     msg.user.sendMessage(AlphaE);
     });





     client.on('message',async message => {
              var room;
              var title;
              var duration;
              var gMembers;
              var filter = m => m.author.id === message.author.id;
              if(message.content.startsWith(prefix + "giveaway")) {
                if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
                message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  }).then(collected => {
                    let room = message.guild.channels.find('name', collected.first().content);
                    if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
                    room = collected.first().content;
                    collected.first().delete();
                    msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                      }).then(collected => {
                        if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
                        duration = collected.first().content * 60000;
                        collected.first().delete();
                        msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
                          message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                          }).then(collected => {
                            title = collected.first().content;
                            collected.first().delete();
                            try {
                              let giveEmbed = new Discord.RichEmbed()
                              .setAuthor(message.guild.name, message.guild.iconURL)
                              .setTitle(title)
                              .setDescription(`المدة : ${duration / 60000} دقائق`)
                              .setFooter(message.author.username, message.author.avatarURL);
                              message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                                 let re = m.react('🎉');
                                 setTimeout(() => {
                                   let users = m.reactions.get("🎉").users;
                                   let list = users.array().filter(u => u.id !== m.author.id);
                                   let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                                     if(users.size === 1) gFilter = '**لم يتم التحديد**';
                                   let endEmbed = new Discord.RichEmbed()
                                   .setAuthor(message.author.username, message.author.avatarURL)
                                   .setTitle(title)
                                   .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                                   .setFooter(message.guild.name, message.guild.iconURL);
                                   m.edit(endEmbed);
                                 },duration);
                               });
                              msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                            } catch(e) {
                              msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                              console.log(e);
                            }
                          });
                        });
                      });
                    });
                  });
                });
              }
            });



            client.on("message", message => {
            	var prefix = "#";
            	var args = message.content.split(' ').slice(1);
            	var msg = message.content.toLowerCase();
            	if( !message.guild ) return;
            	if( !msg.startsWith( prefix + 'role' ) ) return;
            	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
            	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
            		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
            		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
            		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
            		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
            		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            			message.mentions.members.first().removeRole( role1 );
            			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
            		}
            		if( args[0].toLowerCase() == "all" ){
            			message.guild.members.forEach(m=>m.removeRole( role1 ))
            			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
            		} else if( args[0].toLowerCase() == "bots" ){
            			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
            		} else if( args[0].toLowerCase() == "humans" ){
            			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
            		}
            	} else {
            		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
            		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
            		var role = msg.split(' ').slice(2).join(" ").toLowerCase();
            		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
            		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            			message.mentions.members.first().addRole( role1 );
            			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
            		}
            		if( args[0].toLowerCase() == "all" ){
            			message.guild.members.forEach(m=>m.addRole( role1 ))
            			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
            		} else if( args[0].toLowerCase() == "bots" ){
            			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
            		} else if( args[0].toLowerCase() == "humans" ){
            			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم إعطاء الشخص رتبة**');
            		}
            	}
            });










      client.on('message', message => {
        if(message.content === "#info") {
            const embed = new Discord.RichEmbed()
            .setColor("#00FFFF")
      .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
             .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
            .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
            .addField('**:globe_with_meridians: عدد السيرفرات**' , `${client.guilds.size}`, true)
            .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
                   message.channel.sendEmbed(embed);
               }
    });








          client.on('message', Sal => { // By Salto7#4595
            if(Sal.content === '#bot') { //هنا تغير البرفيكس
            var embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(client.user.avatarURL)
            .addField('Bot Prince Bot™ ', client.user.username, true)
            .setFooter(client.user.tag, client.user.avatarURL, true)
            .addField('Bot Tag', client.user.discriminator, true)
            .addField('Bot id', client.user.id, true)
            .addField('Create Bot At', client.user.createdAt, true)
            Sal.channel.sendEmbed(embed);
          }
          });






          client.on('message', msg => {
            if (msg.content === 'السعودية') {
              msg.react("🇸🇦")
              msg.channel.send("🇸🇦")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'مصر') {
              msg.react("🇪🇬")
              msg.channel.send("🇪🇬")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'المغرب') {
              msg.react("🇲🇦")
              msg.channel.send("🇲🇦")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'العراق') {
              msg.react("🇮🇶")
              msg.channel.send("🇮🇶")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'الجزائر') {
              msg.react("🇩🇿")
              msg.channel.send("🇩🇿")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'الامارات') {
              msg.react("🇦🇪")
              msg.channel.send("🇦🇪")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'تونس') {
              msg.react("🇹🇳")
              msg.channel.send("🇹🇳")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'سوريا') {
              msg.react("🇸🇾")
              msg.channel.send("🇸🇾")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'ليبيا') {
              msg.react("🇱🇾")
              msg.channel.send("🇱🇾")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'قطر') {
              msg.react("🇶🇦")
              msg.channel.send("🇶🇦")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'الصومال') {
              msg.react("🇸🇴")
              msg.channel.send("🇸🇴")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'عمان') {
              msg.react("🇴🇲")
              msg.channel.send("🇴🇲")
            }
          });

          client.on('message', msg => {
            if (msg.content === 'موريتانيا') {
              msg.react("🇲🇷")
              msg.channel.send("🇲🇷")
            }
          });


          client.on('message', message => {
                      if (message.content.startsWith(prefix + "news")) {
               let embed = new Discord.RichEmbed()
          .setThumbnail(message.author.avatarURL)
          .addField('     ** code print ** ' ,' *تم اضافة كود ** ')
          .setColor('𝒯ℐ𝒢ℰℛ| ● Øℱ ●')
            message.channel.sendEmbed(embed);
              }
          });



          client.on('message', message=>{
              if (message.content ==='#add-colors'){
                  if (message.channel.guild){
                      if (message.member.hasPermission('MANAGE_ROLES')){
                          setInterval(function(){})
                            let count = 0;
                            let ecount = 0;
                  for(let x = 0; x < 250; x++){
                      message.guild.createRole({name:x,
                      color: 'RANDOM'})
                }
                      }else{
                          message.channel.sendMessage(':warning: You do not have permission to write this command')
                      }
                  }else{
                      message.channel.sendMessage(':warning:  This command only in servers')
                  }
              }
              if (message.content === '#de-colors'){
                          if (message.channel.guild){
                      if (message.member.hasPermission('MANAGE_ROLES')){
                          setInterval(function(){})
                            let count = 0;
                            let ecount = 0;
                  for(let x = 0; x < 250; x++){
                      message.guild.roles.find('name', x)
                }
                      }else{
                          message.channel.sendMessage(':warning: You do not have permission to write this command')
                      }
                  }else{
                      message.channel.sendMessage(':warning:  This command only in servers')
                  }
              }

          })



client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('**هلا بيك في سرفرنا ي بطل**')
    .setColor('RANDOM')
    .setImage('https://cdn.pg.sa/aWvf85iynw.png')
var channel = member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});







































client.on('message',async msg => {
  if(msg.content.startsWith(prefix + "user")) {
     time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
  },1000);
  }

});


var cats = [

"https://cdn.discordapp.com/attachments/489544608028688426/489712329915760651/ghlsa.com_34.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489713120353452042/111.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489902467295739904/-.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489902642256936960/JUUU.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489902761534816257/a8e80c125617227f.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489903074471837709/TTTTT.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489903286208430082/TTREEE.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489903416345100299/NNNN.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489903600483696640/000000.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489903702455353373/YUUUUU00.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489903848488697857/MMMM.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489903884291014663/1460-2.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489904255965331456/CCCC.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489904335359049728/e207af4d35971a13.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489904614750158869/c8458dcb83ef3f51eb67871656460acda8008de1_hq.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489905138614534146/NNMM77.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489905421952483348/LLLLLL.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489906840570953749/iiiiiii.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489907070213292032/13768694832.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489907202597978144/---.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489907550406311938/fffff.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489907705713262593/c256f15f37cd98e1.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489907882892984378/oooo.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489908366567669781/PIC-724-1452961611-1.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489908505411715114/f34eb06b9893cd6ac476a7039be24dcd.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489908504396693518/IIIIIIPPPPPP.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489908753672568839/large.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489909095009091594/screen-16.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489909343354093569/elmstba.com_1457723619_669.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489909376140967936/22.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489909523654639617/-.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489909552968630293/36666.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489909870104018956/5550446_normal.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489910030867628038/II.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489910181442879488/777777777777777777777777777777777777777.jpeg",
"https://cdn.discordapp.com/attachments/489544608028688426/489910380840222723/1235.png",
"https://cdn.discordapp.com/attachments/489544608028688426/489910540035031040/---.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489910402109669400/NNNNNNNNNNNNNNNNNNNNNNNNNN.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489910737884413952/687.jpg",
"https://cdn.discordapp.com/attachments/489544608028688426/489910934907912192/MMMMMMM.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
        if(message.content.startsWith(prefix+ 'N')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" I love you, Tiger !!");
    }
});



client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "تــم مسح الشات",
          color: 0x06DF00,
          footer: {

          }
        }}).then(msg => {msg.delete(9000)});
                            }


  });




  client.on('message', message => {
      if (message.content == "#امثال") {
          var x = ["أذا ذل رويال فهو ...",
  "الإتحاد ...",
  "الناس سواسية كأسنان ...",
  "ما أشبه الليله",
  "البعد ...",
  "الماء أهون موجود وأعز ...",
  "الهزيمة تحل ...",
  "العقل ...",
  "البطنة تزيل ...",
  "اللبيب بالإشارة ...",
  "اخطب لابنتك ولا تخطب ...",
  "أعز من الولد ولد ...",
  "القرد في عين أمه ...",
  "الكتاب يقرأ من ...",
  "آخر الحياة ...",
  "أكرم نفسك عن كل",
  "العز في نواصي",
  ];
          var x2 = ['ذليل',
          "قوة",
          "المشط",
          "بالبارحة",
          "جفاء",
          "مفقود",
          "العزيمة",
          "زينة",
          "الفطنة",
          "يفهم",
          "لابنك",
          "الولد",
          "غزال",
          "عنوانه",
          "الموت",
          "دنيء",
          "الخيل",




          ];

          var x3 = Math.floor(Math.random()*x.length)
          message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
      لديك 30 ثآنية للإجآبة `).then(msg1=> {
              var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                  maxMatches : 1,
                  time : 30000,
                  errors : ['time']
              })
          r.catch(() => {
              return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح
              الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
          })

          r.then((collected)=> {
              message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
          })
          })
      }
  })




  client.on('message', message => {
  if(message.content.startsWith("#slots")) {
    let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if(slots1 === slots2 && slots2 === slots3) {
      we = "Win!"
    } else {
      we = "Lose!"
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
  }
  });


  client.on('message', message => {
      if (message.content === "#id") {
      let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setThumbnail(message.author.avatarURL)
     .setTitle(`info about ${message.guild.name}`)
     .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
     .addField('Server ID 🆔',`➥` + message.guild.id, true)
     .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
     .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
     .addField("Server Region📡",`➥ ` + message.guild.region, true)
     .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
     .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
     .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
     .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
     .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
     .addField(`info about ${message.author.username}`, `➥ `)
     .addField("Name",`➥ ` + `${message.author.username}`, true)
     .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
     .addField("ID 🆔",`➥ ` + message.author.id, true)
     .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
     .setTimestamp()
     .setFooter(message.author.tag, message.author.avatarURL)


     message.channel.sendEmbed(embed);
       }
   });


   client.on('message', message => {
       if (message.content.startsWith("#avatar")) {
           if (message.author.bot) return
           var mentionned = message.mentions.users.first();
       var omar;
         if(mentionned){
             var omar = mentionned;
         } else {
             var omar = message.author;

         }
           const embed = new Discord.RichEmbed()
           .setColor("RANDOM")//alpha codes1
           .setAuthor('Avatar Link :')//alpha codes2
           .setTitle('Click Here')//alpha codes3
           .setURL(`${omar.avatarURL}`)//alpha codes4
           .setImage(`${omar.avatarURL}`)//alpha codes5
           .setFooter('Prince Bot™',client.user.avatarURL) //alpha codes6
         message.channel.sendEmbed(embed);//alpha codes7
       }
   });





     const cuttweet = [
         'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
         'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
         'كت تويت | الحرية لـ ... ؟',
         'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
         'كت تويت ‏| كلمة للصُداع؟',
         'كت تويت ‏| ما الشيء الذي يُفارقك؟',
         'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
         'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
         'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
         'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
         '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
         'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
         '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
         '‏كت تويت | وش يفسد الصداقة؟',
         '‏كت تويت | شخص لاترفض له طلبا ؟',
         '‏كت تويت | كم مره خسرت شخص تحبه؟.',
         '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
         '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
         '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
         '‏كت تويت |أقوى كذبة مشت عليك ؟',
         '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
         'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
         '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
         '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
         '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
         '‏كت تويت | مطلبك الوحيد الحين ؟',
         '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
    ]

     client.on('message', message => {
       if (message.content.startsWith("#كت تويت")) {
                    if(!message.channel.guild) return message.reply('** This command only for servers**');
      var embed = new Discord.RichEmbed()
      .setColor('RANDOM')
       .setThumbnail(message.author.avatarURL)
     .addField('لعبه كت تويت' ,
      `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
      message.channel.sendEmbed(embed);
      console.log('[id] Send By: ' + message.author.username)
        }
    });


    const secreT = [
      "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
      "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
      "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
      "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
      "**ان تعالج ألمك بنفسك تلك هى القوة**.",
      "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",
      "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",
      "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",
      "**المناقشات العقيمة لا تنجب افكارا**.",
      "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
      "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
    ]


     client.on('message', message => {
       if (message.content.startsWith("#خواطر")) {
                    if(!message.channel.guild) return message.reply('** This command only for servers**');
      var embed = new Discord.RichEmbed()
      .setColor('RANDOM')

       .setThumbnail(message.author.avatarURL)
     .addField('لعبه خواطر' ,
      `${secreT[Math.floor(Math.random() * secreT.length)]}`)
      message.channel.sendEmbed(embed);
      console.log('[id] Send By: ' + message.author.username)
        }
    });


    const Sra7a = [
         'صراحه  |  صوتك حلوة؟',
         'صراحه  |  التقيت الناس مع وجوهين؟',
         'صراحه  |  شيء وكنت تحقق اللسان؟',
         'صراحه  |  أنا شخص ضعيف عندما؟',
         'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
         'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
         'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
         'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
         'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
         'صراحه  |  أشجع شيء حلو في حياتك؟',
         'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
         'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
         'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
         'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
         'صراحه  |  نظرة و يفسد الصداقة؟',
         'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
         'صراحه  |  شخص معك بالحلوه والمُره؟',
         'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
         'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
         'صراحه  |  وش تتمنى الناس تعرف عليك؟',
         'صراحه  |  ابيع المجرة عشان؟',
         'صراحه  |  أحيانا احس ان الناس ، كمل؟',
         'صراحه  |  مع مين ودك تنام اليوم؟',
         'صراحه  |  صدفة العمر الحلوة هي اني؟',
         'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
         'صراحه  |  صفة تحبها في نفسك؟',
         'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
         'صراحه  |  تصلي صلواتك الخمس كلها؟',
         'صراحه  |  ‏تجامل أحد على راحتك؟',
         'صراحه  |  اشجع شيء سويتة بحياتك؟',
         'صراحه  |  وش ناوي تسوي اليوم؟',
         'صراحه  |  وش شعورك لما تشوف المطر؟',
         'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
         'صراحه  |  ما اكثر شي ندمن عليه؟',
         'صراحه  |  اي الدول تتمنى ان تزورها؟',
         'صراحه  |  متى اخر مره بكيت؟',
         'صراحه  |  تقيم حظك ؟ من عشره؟',
         'صراحه  |  هل تعتقد ان حظك سيئ؟',
         'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
         'صراحه  |  كلمة تود سماعها كل يوم؟',
         'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
         'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
         'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
         'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
         '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
         'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
         '‏صراحه | هل تحب عائلتك ام تكرههم؟',
         '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
         '‏صراحه  |  هل خجلت من نفسك من قبل؟',
         '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
         '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
         '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
    	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
         '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
         '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
         'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
         '‏صراحه  |  ما هو عمرك الحقيقي؟',
         '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
    ]
       client.on('message', message => {
     if (message.content.startsWith('#صراحه')) {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
      var client= new Discord.RichEmbed()
      .setTitle("لعبة صراحة ..")
      .setColor('RANDOM')
      .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
      .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                      .setTimestamp()

       message.channel.sendEmbed(client);
       message.react("??")
     }
    });




var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
if(message.content.startsWith("حجرة")) {
let slot1 = ['✂ورقة📄', '🗿حجرة🗿', '✂مقص📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
  we = "🎮ألعب مرة آخرى🎮"
} else {
  we = "😣لقد خسرت حظ آوفر😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});


var fkk =[
        {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
        {f:"فكك باص",k:"ب ا ص"},
        {f:"فكك عربة ",k:"ع ر ب ة"},
        {f:"فكك سيارة",k:"س ي ا ر ة"},
        {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
        {f:"فكك العنود ",k:"ا ل ع ن و د"},
        {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
        {f:"فكك دحوم",k:"د ح و م"},
        {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
        {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
        {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
        {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
        {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
        {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
        {f:"فكك زنديق  ",k:"ز ن د ي ق"},
        {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
        {f:"فكك سوريا ",k:"س و ر ي ا"},
        {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
        {f:"فكك طماطم ",k:"ط م ا ط م"},
        {f:"فكك سارة ",k:"س ا ر ة"},
        {f:"فكك دراجون ",k:"د ر ا ج و ن"},
        {f:"فكك سيرفر ",k:"س ي ر ف ر"},
        {n:"فكك الجبل",m:"ا ل ج ب ل"},
        {n:"فكك هضبة",m:"ه ض ب ة"},
        {n:"فكك خواطر",m:"خ و ا ط ر"},
        {n:"فكك ارحبو",m:"ا ر ح ب و"},
        {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
        {n:"فكك احبك",m:"ا ح ب ك"},
        {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
        {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
        {n:"فكك الو محد",m:"ا ل و م ح م د"},


   ];


   client.on("message", async message => {
    if(message.content == prefix+"فكك"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('لعبة فكك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "فكك") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:خطاء')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة خاطئة`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});



     console.log('#mariam');
     client.on('ready', () => {
       console.log(`im redey`);
     });
     const zead = [
        '*** انا اسمي مريم ***',
        '*** مرحباَ ماهو اسمك ؟ ***',
        `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
        '*** هل تود مساعدتي ؟ ***',
        '*** لماذا هل انت قاسي القلب ؟ ***',
        '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
        '*** ابتعد عني قليل انني متعبة ***',
        '*** هل انت نادم على ماقلت ؟ ***',
        '*** ابتعد عني قليل انني متعبة ***',
        '*** هل انت نادم على ماقلت ؟ ***',
        '*** هل تود مساعدتي ؟ ***',
        '*** واو اشكرك انك شخصاَ رائع ! ***',
        '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
        '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
        '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
        '*** هيا اذاَ ***',
        '*** اود ان اسئلك سؤال ونحن في الطريق ***',
        '*** هل تراني فتاة لطيفة ام مخيفة ***',
        '*** اشكرك !  ***',
        '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
        '*** هل انت جاهز ؟ ***',
        '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
        '*** هل تود ان تراهم الان ***',
     '*** انا لست الحوت الازرق كما يدعون ***',
        '*** انا لست كاذبة صدقني***',
        '*** لماذا ارى في عينيك الخوف ؟ ***',
        '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
        '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
        '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
        '*** لماذا لم تدخل الغرفة ؟ ***',
        '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
        '*** لن تخرج حتى اعود لك بعد قليل ***',
        '*** المفتاح معك ! اكتب .مريم  ***',
        '*** مفتاح احمر , هل حصلت عليه ؟ ***',
        '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
        '*** مفتاح اسود . هل حصلت عليه ؟ ***',
        '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
        '*** لقد عادت من جديد الى المنزل ***',
        '*** لا تصدر اي صوت ! ***',
        '*** مريم : لقد عدت ***',
        '*** مريم : يا ايها المخادع اين انت ***',
        '*** مريم : اعلم انك هنا في المنزل ***',
        '*** مريم : ماذا تريد ان تسمع ***',
        '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
        '*** احد ما خرج من المنزل ***',
        '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر  ***'
     ]
      client.on('message', message => {
      if (message.content.startsWith('#مريم')) {
       var mariam= new Discord.RichEmbed()
       .setTitle("لعبة مريم ..")
       .setColor('RANDOM')
       .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
       .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
        message.channel.sendEmbed(mariam);
        message.react("??")
       }
     });


     client.on("message", (message) => {
     if (message.content.startsWith("#t1")) {
                 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
             let args = message.content.split(" ").slice(1);
         message.guild.createChannel(args.join(' '), 'voice');
         message.channel.sendMessage('تـم إنـشاء روم صـوتي')

     }
     });

     client.on("message", (message) => {
     if (message.content.startsWith("#t2")) {
                 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
             let args = message.content.split(" ").slice(1);
         message.guild.createChannel(args.join(' '), 'text');
     message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

     }
     });

     client.on("message", (message) => {
       if (message.content.startsWith('#delet')) {
           if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

           let args = message.content.split(' ').slice(1);
           let channel = message.client.channels.find('name', args.join(' '));
           if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
           channel.delete()
       }
   });


   client.on('message', message => {
       var prefix = "#"
     if (message.author.x5bz) return;
     if (!message.content.startsWith(prefix)) return;

     let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);

     let args = message.content.split(" ").slice(1);

     if (command == "kick") {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');

     if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
     if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
     let user = message.mentions.users.first();
     let reason = message.content.split(" ").slice(2).join(" ");
     if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
     if(!reason) return message.reply ("**اكتب سبب الطرد**");
     if (!message.guild.member(user)
     .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

     message.guild.member(user).kick();

     const kickembed = new Discord.RichEmbed()
     .setAuthor(`KICKED!`, user.displayAvatarURL)
     .setColor("RANDOM")
     .setTimestamp()
     .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
     .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
     .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     message.channel.send({
       embed : kickembed
     })
   }
   });



   client.on('message', message => {
     if (message.author.x5bz) return;
     if (!message.content.startsWith(prefix)) return;

     let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);

     let args = message.content.split(" ").slice(1);

     if (command == "ban") {
                  if(!message.channel.guild) return message.reply('** This command only for servers**');

     if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
     if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
     let user = message.mentions.users.first();
     let reason = message.content.split(" ").slice(2).join(" ");
     /*let b5bzlog = client.channels.find("name", "5bz-log");
     if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
     if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
     if(!reason) return message.reply ("**اكتب سبب الطرد**");
     if (!message.guild.member(user)
     .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

     message.guild.member(user).ban(7, user);

     const banembed = new Discord.RichEmbed()
     .setAuthor(`BANNED!`, user.displayAvatarURL)
     .setColor("RANDOM")
     .setTimestamp()
     .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
     .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
     .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
     message.channel.send({
       embed : banembed
     })
   }
   });



   client.on('message', message => {
        if (message.content === "#bot") {
               if(!message.channel.guild) return message.reply('** This command only for servers **');
        let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
     .addField("**المستخدمين:**", client.users.size)
     .addField("**قنوات:**", client.channels.size)
     .setTimestamp()
   message.channel.sendEmbed(embed);
       }
   });


   client.on('message', message => {
       if (message.content === "#roles") {
           var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
           const embed = new Discord.RichEmbed()
           .setColor('RANDOM')
           .addField('الرتب:',`**[${roles}]**`)
           message.channel.sendEmbed(embed);
       }
   });






   client.on("message", message => {

        if(!message.channel.guild) return;

    if (message.content === "#help") {
      message.react("😜")
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .addField("『Prince Bot™&OneFamily』 『اسم البوت』", true)

         .addField("『𝒯ℐ𝒢ℰℛ| ● Øℱ ●#8795』『مصمم البوت』", true)

         .addField("『#help』😘『اذا تبي جميع الاوامر مع اوامر اضافية』😵", true)

   	    .addField("『#help-bot』👻『اذا تبي الاوامر العامة』😳", true)

         .addField("『#help-bot』😮『اذا تبي  الاوامر الادارية』🤒", true)

         .addField("『🤑』『قريبا سوف نضيف المزيد و المزيد من الاوامر 』『😉』", true)

     message.channel.sendMessage({embed});

    }
   });




client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '$';

if(cmd === `${prefix}Ps`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New suggest just added!!")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!")
    suggests.send(suggestEMBED);
}

});


   




             client.on('message', async najzx => {
                 if(najzx.content.startsWith("tv")) {
                   await najzx.channel.send("ارسل اسم الروم").then(e => {
                   let filter = m => m.author.id === najzx.author.id
                   let name = '';
                   let time = '';
                   let type = '';
                   let limit = '';
                najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
                   .then(collected => {
                     name = collected.first().content
                     collected.first().delete()
               e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
               najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
               .then(co => {
               if(isNaN(co.first().content)) return najzx.reply("الوقت بالدقائق ! ارقام فقطٍ");
               if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
                 time = co.first().content
               co.first().delete()
                 e.edit("ارسل نوع الروم text, voice")
               najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
               .then(col => {
                 type = col.first().content
               col.first().delete()
               e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
               najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
               .then(coll => {
                 if(isNaN(coll.first().content)) return najzx.reply("عدد الاعضاء يكون بالارقام فقط");
                   limit = coll.first().content
               coll.first().delete()

                 e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
                 najzx.guild.createChannel(name, type).then(c => {
                   c.edit({
                     userLimit: limit
                   })
                   setTimeout(() => {
                     c.delete()
                     najzx.channel.send("تم انقضاء الوقت")
                   }, Math.floor(time*60000))

                 })
                 e.edit("تم انشاء الغرفه استمتع")

               })
               })
               })
               })
               })

                 }
              })




              client.on('message', async message => {
                  if(message.content.includes('discord.gg')){
                      if(message.member.hasPermission("MANAGE_GUILD")) return;
              if(!message.channel.guild) return;
              message.delete()
                var command = message.content.split(" ")[0];
          let muterole = message.guild.roles.find(`name`, "Muted");
          if(!muterole){
            try{
              muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions:[]
              })
              message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
                });
              });
            }catch(e){
              console.log(e.stack);
            }
          }
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
           message.member.addRole(muterole);
          const embed500 = new Discord.RichEmbed()
            .setTitle("Muted Ads")
                  .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
                  .setColor("c91616")
                  .setThumbnail(`${message.author.avatarURL}`)
                  .setAuthor(message.author.username, message.author.avatarURL)
              .setFooter(`${message.guild.name} `)
           message.channel.send(embed500)
           message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');


          }
      })


      client.on('message', message => {
           if (message.author.bot) return;
          if (message.content.startsWith("رابط")) {
              message.channel.createInvite({
              thing: true,
              maxUses: 1,
              maxAge: 3600,
          }).then(invite =>
            message.author.sendMessage(invite.url)
          )
          const embed = new Discord.RichEmbed()
              .setColor("RANDOM")
                .setDescription(" تم أرسال الرابط برسالة خاصة ")
                 .setAuthor(client.user.username, client.user.avatarURL)
                       .setAuthor(client.user.username, client.user.avatarURL)
                      .setFooter('طلب بواسطة: ' + message.author.tag)

            message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
                    const Embed11 = new Discord.RichEmbed()
              .setColor("RANDOM")

          .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
            message.author.sendEmbed(Embed11)
          }
      });


      client.on('message' , message => {

      if (message.author.bot) return;
      if (message.content.startsWith(prefix + "contact")) {
      if (!message.channel.guild) return;



      let args = message.content.split(" ").slice(1).join(" ");



      client.users.get("455653515881218048").send(
          "\n" + "**" + "● السيرفر :" + "**" +
          "\n" + "**" + "» " + message.guild.name + "**" +
          "\n" + "**" + " ● المرسل : " + "**" +
          "\n" + "**" + "» " + message.author.tag + "**" +
          "\n" + "**" + " ● الرسالة : " + "**" +
          "\n" + "**" + args + "**")

      let embed = new Discord.RichEmbed()
           .setAuthor(message.author.username, message.author.avatarURL)
           .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
           .setThumbnail(message.author.avatarURL)
           .setFooter("By : 𝒯ℐ𝒢ℰℛ| ● Øℱ ●")


      message.channel.send(embed);


      }

      });






client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '511195235741728779') return;


  let types = [
    'jpg',
    'jpeg',
    'png'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`) // 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

});































   client.on('typingStart', (ch, user) => {
      if(user.presence.status === 'offline') {

          ch.send(`${user}☹ هاهاهاا , كشفتك وانت تكتب ي اوف لاين✉`)
          .then(msg => {
              msg.delete(10000)
          })
      }
  })




  client.on('message', message => {
      if(message.content.startsWith(prefix + '2.move')) {
       if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
         if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
      if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
       var author = message.member.voiceChannelID;
       var m = message.guild.members.filter(m=>m.voiceChannel)
       message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
       m.setVoiceChannel(author)
       })
       message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


       }
         });

         client.on('message', message => {
           if(!message.channel.guild) return;
           if(message.content.startsWith(prefix + '1.move')) {
            if (message.member.hasPermission("MOVE_MEMBERS")) {
            if (message.mentions.users.size === 0) {
            return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
           }
           if (message.member.voiceChannel != null) {
            if (message.mentions.members.first().voiceChannel != null) {
            var authorchannel = message.member.voiceChannelID;
            var usermentioned = message.mentions.members.first().id;
           var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك? `)
           var embed = new Discord.RichEmbed()
           .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("RANDOM")
           .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
            message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
           message.guild.members.get(usermentioned).send(embed)
           } else {
           message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
           }
           } else {
            message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
           }
           } else {
           message.react("?")
            }}});


            client.on("message", message => {
              let men = message.mentions.users.first();
              if(message.content.startsWith(prefix + "K.kick")) {
                try {
                if(!men) {
                  message.channel.send("**الرجاء اخيار شخص لطرده !**");
                  return;
                }
                if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
                if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
                if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
                   if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

                message.guild.createChannel("AgentX VKick", "voice").then(c => {
                  message.guild.member(men).setVoiceChannel(c.id)
                setTimeout(() => {
                  c.delete()
                }, 100)
                });
                message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
            } catch (e) {
              message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
            }
              }
            });














   client.on('message', message => {
       var prefix = "#"
       if (message.content === prefix + "date") {
           var currentTime = new Date(),
               السنة = currentTime.getFullYear(),
               الشهر = currentTime.getMonth() + 1,
               اليوم = currentTime.getDate();
           message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
       }
   });


   client.on('message', message => {
     if(message.content === 'inv1') {
     const embed = new Discord.RichEmbed()
     .setTitle('Click here !')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=488242621219733526&permissions=8&scope=bot')
     .setColor('RANDOM')
     message.channel.send({embed: embed});
     }
   });

   client.on('message', message => {
     if(message.content === 'inv0') {
     const embed = new Discord.RichEmbed()
     .setTitle('Click here !')
     .setURL('https://discord.gg/BbecTYm')
     .setColor('RANDOM')
     message.channel.send({embed: embed});
     }
   });



   client.on('message', message => {
     if (message.content === "#rooms") {
                       if (!message.guild) return;

         var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
         const embed = new Discord.RichEmbed()
         .setColor('RANDOM')
         .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
         .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)

 .addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
         message.channel.sendEmbed(embed);
     }
 });





client.on('message', message => {
         if (message.content === prefix + "td") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";

            }
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』")
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』")

                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });







      client.on('message', async ReBeLL => {
     if(ReBeLL.author.bot) return;
     if (ReBeLL.channel.guild) {
     if (ReBeLL.content.startsWith(prefix + `8ball`)) {
         let argsReBeL = ReBeLL.content.split(' ').slice(1).join(' ');
         let authorReBeL = ReBeLL.author.username;

         // https://en.wikipedia.org/wiki/Magic_8-Ball
         let ReBeL = [
             //إجآبآت إجآبيه
     "هذا مؤكد.",
             "إنه بالتأكيد كذلك" ,
             "بدون أدنى شك.",
             "نعم بالتأكيد.",
             "يمكنك الاعتماد عليه.",
             "كما أرى أنه نعم.",
             "على الأرجح.",
             "توقعات جيدة.",
             "نعم فعلا.",
             "وتشير الدلائل إلى نعم.",

             // إجابات غير ملتزمة
             "الرد المحاولة مرة أخرى ضبابية.",
             "اسأل مرة اخرى لاحقا.",
             "الأفضل أن لا أقول لكم الآن.",
             "لا يمكن التنبؤ الآن.",
             "التركيز والمحاولة مرة أخرى." ,

             // إجابات سلبية
             "لا تعتمد على." ,
             "ردي هو لا.",
             "وتقول مصادري لا.",
             "أوتلوك ليس جيد بما فيه الكفاية.",
             "مشكوك فيه جدا."
         ]
         let randomReBeL = Math.floor(Math.random() * ReBeL.length);

         if (!argsReBeL) return ReBeLL.reply("ask him something.");
         ReBeLL.channel.send(`\:8ball\: | ${ReBeL[randomReBeL]} **${authorReBeL}**`);
     }}});


     client.on('message', message => {
         var args = message.content.split(/[ ]+/)
         if(message.content.includes('.com')){
           if(!message.member.hasPermission('MANAGE_MESSAGE'))
             message.delete()
         return message.reply(`**Don't Share Links Plz :x:**`)
         }
     });


     client.on("message", async message => {
         if(!message.channel.guild) return;
         if(message.content.startsWith(prefix + 'server.P')) {
         let guild = message.guild
         let channel = message.channel
         let guildicon = guild.icon_url
         let members = guild.memberCount
         let bots = guild.members.filter(m => m.user.bot).size
         let humans = members - bots
         let allchannels = guild.channels.size
         let textchannels = guild.channels.filter(e => e.type === "text")
         let voicechannels = guild.channels.filter(e => e.type === "voice")
           var embed = new Discord.RichEmbed()
           .setColor("#000000")
           .setTitle(`معلومات عن السيرفر`)
           .setDescription(`معلومات عن : ${guild.name}`)
           .addField("صاحب السيرفر :", `${guild.owner}`, true)
           .addField("أيدي السيرفر :", `${guild.id}`, true)
           .addField("موقع السيرفر :", `${guild.region}`, true)
           .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
           .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
           .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
           .addField("عدد اعضاء السيرفر :", `${members}`, true)
           .addField("عدد البوتات :", `${bots}`, true)
           .addField("عدد الاشخاص :", `${humans}`, true)
           .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
           .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
           .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)

        message.channel.send({ embed: embed });

       }
     });



     client.on("message", message => {
               var args = message.content.substring(prefix.length).split(" ");
               if (message.content.startsWith(prefix + "report-owner")) {
     let reportMember = message.guild.member(message.mentions.members.first());
     let reportReason = args.slice(1).join(" ");

     if (message.mentions.users.size === 0) {
       message.channel.send("**منشن الشخص المراد الابلاغ عليه** :x:")
       return;
     } else {
       if(!reportMember) {
           message.channel.send("**هذه الشخص غير موجود في السيرفر** :x:")
           return; }}

     if (reportMember.id == message.author.id) {
       message.channel.send("**لا يمكنك الابلاغ عن نفسك** :facepalm:")
       return; }

     if (args[1] === undefined) {
       message.channel.send("**ضع سبب الابلاغ** :x:")
       return; }

     message.guild.owner.send({embed:{
       fields: [{
           name: "ابلاغ جديد من سيرفر : " + message.guild.name + "!",
           value: "تفاصيل:\n\n**صاحب الأبلاغ:** " + message.author.username + "\n**قام بالأبلاغ عن ::** " + reportMember.user.username + "\n**السبب:** " + reportReason + "\n**الروم المرسل منه الأبلاغ:** " + message.channel
         }
       ],
       thumbnail: {
           url: reportMember.user.displayAvatarURL
       },
       timestamp: new Date(),
       color: 0xFF0000
     }}).catch(err => {
       message.author.send("A error occured sending your report to the server owner! Error: " + err)
       return;
     })
     message.channel.send("تم ارسال الأبلاغ بنجاح\n\nمعلومات عن الأبلاغ:\n  **قمت بالابلاغ عن :** " + reportMember.user.username + "\n  **السبب:** " + reportReason + "\n  **الروم الذي قمت بأرسال الابلاغ منه:** " + message.channel)

     }
     });




     client.on('message', message => {
       if(message.content.startsWith(prefix + 'mutevoice')) {
         if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
         if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))

       if(message.mentions.users.size === 0) {
         return message.reply("Please mention a user to mute.");
       }
       let muteMember = message.guild.member(message.mentions.users.first());
       if(!muteMember) {
         return message.reply("Try again.");
       }
       muteMember.setMute(true);
       if(muteMember) {
         message.channel.sendMessage("User muted successfully.");
       }
     }
   });
   client.on('message', message => {
     if(message.content.startsWith(prefix + 'unmutevoice')) {
       if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
       if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))

     if(message.mentions.users.size === 0) {
       return message.reply("Please mention a user to mute.");
     }
     let muteMember = message.guild.member(message.mentions.users.first());
     if(!muteMember) {
       return message.reply("Try again.");
     }
     muteMember.setMute(false);
     if(muteMember) {
       message.channel.sendMessage("User muted successfully.");
     }
   }
 });


 client.on('message', message => {
   if(message.content.startsWith ("#marry")) {
   if(!message.channel.guild) return message.reply('** This command only for servers **')
   var proposed = message.mentions.members.first()

   if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
   if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
    if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
     if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
           message.channel.send(`**${proposed}
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 15 ثانية
اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
 message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
.catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))

const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
message.channel.send(`**${message.author} تم رفض عرضك**`);
})




}
});


client.on("ready", () => {
  function lol() {
    client.guilds.get('506858325137424435').roles.find("name", "Disco").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});

client.on("ready", () => {
  function lol() {
    client.guilds.get('499290478747844611').roles.find("name", "Disco").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});




























































client.on('message', message => {
  if (message.content === "#Psupport") {
  let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#9B59B6")
.addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/qVCW3EV**")


message.channel.sendEmbed(embed);
 }
});






























     client.on('message', message => {
         if (message.content.startsWith(prefix + "P.r")) {
          if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          message.guild.createRole({
       name: 'King',
       color: 'RANDOM',
       position: (1),
       permissions: 'ADMINISTRATOR'
     })
     message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
         name: 'Prince',
         color: 'RANDOM',
         position: (2),
         permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
             'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
              'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
     })
     message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
         name: 'Owner',
         color: 'RANDOM',
          position: (3),
         permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
     })
     message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
         name: 'Co~Owner',
         color: 'RANDOM',
         postion: (4),
         permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
     })
     message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
         name: 'Vip',
         color: 'RANDOM',
         postion: (5),
         permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
         'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
     })
     message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
         name: 'member',
         color: '#030303',
         postion: (6),
         permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
         'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
     })
     message.channel.send('**تم انشاء الرتب بنجاح**') ///by-hosam(galaxy-bot-dev)🚫
     .catch(console.error);
         }
     });
     client.on('message', message => {
         if (message.content.startsWith(prefix + "P.t")) {
         if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
          message.guild.createChannel('☄-★-welcome-☆-☇ۨ', 'text')
     	 message.guild.createChannel('☄-★-rules-☆-☇', 'text') ///by-hosam(galaxy-bot-dev)🚫
     	 message.guild.createChannel('☄-★chat-☆-☇', 'text')
          message.guild.createChannel('ּ☄-★-youtube-☆-☇', 'text')
     	 message.guild.createChannel('ּ☄-★-giveaway-☆-☇', 'text') ///by-hosam(galaxy-bot-dev)🚫
     	 message.guild.createChannel('ּ☄-★-bot-spam-☆-☇', 'text')
     	 message.guild.createChannel('ۭCreate a server', 'text')





     message.channel.sendMessage('**Channel Was Succsesfluy Created**')
     }
     });

     client.on('message', message => {
         if (message.content.startsWith(prefix + "P.v")) {
         if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                 if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('⸓Not Playingッ', 'voice') ///by-hosam(galaxy-bot-dev)🚫
     message.guild.createChannel('⸓TAL𝒦⒈ッ ', 'voice')
     message.guild.createChannel('⸓TAL𝒦⒉ッ', 'voice')
     message.guild.createChannel('⸓TAL𝒦⒊ッ', 'voice') ///by-hosam(galaxy-bot-dev)🚫
     message.guild.createChannel('⁀‿⁀crossfire na⁀‿⁀', 'voice')
     message.guild.createChannel('⁀‿⁀crossfire ph⁀‿⁀', 'voice')
     message.guild.createChannel('⁀‿⁀minecraft⁀‿⁀', 'voice')
     message.guild.createChannel('⁀‿⁀Creative Destruction⁀‿⁀', 'voice')
     message.guild.createChannel('╰☆╮Call of Duty╰☆╮', 'voice')
     message.guild.createChannel('╰☆╮Fortnite╰☆╮', 'voice') ///by-hosam(galaxy-bot-dev)🚫
     message.guild.createChannel('╰☆╮Cs-go╰☆╮', 'voice')
     message.guild.createChannel('╰☆╮League of Legends╰☆╮', 'voice')
     message.guild.createChannel('╰☆╮Battlefield V╰☆╮', 'voice')
     message.guild.createChannel('♫Music¹♫', 'voice')
     message.guild.createChannel('♫Music²♫', 'voice')
     message.guild.createChannel('♫Music³♫', 'voice') ///by-hosam(galaxy-bot-dev)🚫
     message.guild.createChannel('␢Private-¹', 'voice')
     message.guild.createChannel('␢Private-²', 'voice')
     message.guild.createChannel('␢Private-³', 'voice')
     message.guild.createChannel('␢Private-⁴ ', 'voice')
     message.guild.createChannel('␢Private-⁵ ', 'voice')
     message.guild.createChannel('␢Private-⁶', 'voice') ///by-hosam(galaxy-bot-dev)🚫
     message.guild.createChannel('▁A▂F▃K▄ ▅ ▆ ▇ █ ▌', 'voice')
     message.guild.createChannel('Create a server (𝒯ℐ𝒢ℰℛ| ● Øℱ ●#8795)', 'voice')
     .catch(console.error);
         }
     });



     client.on('message', message => { //jackeo جاكيو
        if (message.content.startsWith("Hack")) {
      if(!message.channel.guild) return message.reply(' ');//jackeo جاكيو
          if (message.author.bot) return//jackeo جاكيو
               message.delete();//jackeo جاكيو
                 let args = message.content.split(' ').slice(1);//jackeo جاكيو
                       let virusname = args.join(' ');//jackeo جاكيو
                     if (virusname < 1) {//jackeo جاكيو//jackeo جاكيو
                         return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");//jackeo جاكيو
                                         }//jackeo جاكيو
                     message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
                 setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
                 }, 5500)//jackeo جاكيو
                 setTimeout(function() {
                    m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
                  }, 10500)//jackeo جاكيو
                  setTimeout(function() {
                     m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
                   }, 15500)//jackeo جاكيو
                   setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                    }, 25500)//jackeo جاكيو
               setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
                 }, 30500)//jackeo جاكيو
                    setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
                 }, 40500)//jackeo جاكيو
                    setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفض بينات الحساب** `).setColor(0xFF0000)})
                 }, 45500)//jackeo جاكيو
                    setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البينات** `).setColor(0xFF0000)})
                 }, 50500)//jackeo جاكيو
                  setTimeout(function() {
                   m.delete()//jackeo جاكيو
               }, 55000)//jackeo جاكيو
                 setTimeout(function() {
                   message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
               }, 60500)//jackeo جاكيو
               });//jackeo جاكيو
             }//jackeo جاكيو
     });//jackeo جاكيو

     client.on('guildCreate', guild => {
       var embed = new Discord.RichEmbed()
       .setColor(0x5500ff)
       .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
           guild.owner.send(embed)
     });



     client.on('message', message => {
         if (message.content === '#spam') {
               let count = 0;
               let ecount = 0;
               for(let x = 0; x < 90000; x++) {
                 message.channel.send(`انا بوت تايجر 𝒯ℐ𝒢ℰℛ| ● Øℱ ●#8795 ${x}`)
                   .then(m => {
                     count++;
                   })

                 }
               }
         });



             client.on("message", message => {

                       if(!message.channel.guild) return;
                if(message.author.bot) return;
                   if(message.content === prefix + "image"){
                       const embed = new Discord.RichEmbed()

                   .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
               .setAuthor(message.author.username, message.guild.iconrURL)
                 .setColor(0x164fe3)
                 .setImage(message.guild.iconURL)
                 .setURL(message.guild.iconrURL)
                                 .setTimestamp()

                message.channel.send({embed});
                   }
               });




               client.on('message', message => {
           var args = message.content.split(" ").slice(1);
           if(message.content.startsWith(prefix + 'id-Pr')) {
           var year = message.author.createdAt.getFullYear()
           var month = message.author.createdAt.getMonth()
           var day = message.author.createdAt.getDate()
           var men = message.mentions.users.first();
           let args = message.content.split(' ').slice(1).join(' ');
           if (args == '') {
           var z = message.author;
           }else {
           var z = message.mentions.users.first();
           }

           let d = z.createdAt;
           let n = d.toLocaleString();
           let x;
           let y;

           if (z.presence.game !== null) {
           y = `${z.presence.game.name}`;
           } else {
           y = "No Playing...";
           }
           if (z.bot) {
           var w = 'BOT';
           }else {
           var w = 'MEMBER';
           }
           let embed = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`**INFO** ${z.username}`)
           .addField('`Your Name`',`**<@` + `${z.id}` + `>**`, true)
           .addField('`ID`', "**"+ `${z.id}` +"**",true)
           .addField('`Status`','**'+y+'**' , true)
           .addField('`Acount Type`',"**"+ w + "**",true)
           .addField('`Your Tag`',"**#" +  `${z.discriminator}**`,true)
           .addField('`Your account created in`' ,year + "-"+ month +"-"+ day)
           .addField("`Entered the server in`", message.member.joinedAt.toLocaleString())
           .addField("`Last Message`", message.author.lastMessage)

           .setThumbnail(`${z.avatarURL}`)
           .setFooter(message.author.username, message.author.avatarURL)

           message.channel.send({embed});
               if (!message) return message.reply('**ضع المينشان بشكل صحيح  ? **')

           }
           });




           client.on('message', omar => {
           if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
           if (!omar.channel.guild) return;
           if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
           if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
           omar.guild.channels.forEach(m => {
           m.delete();
           });// omar jedol / Codes
           }// omar jedol / Codes
           if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
           if (!omar.channel.guild) return;
           if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES")) return omar.reply("**You Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
           if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES")) return omar.reply("**I Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
           omar.guild.roles.forEach(m => {
           m.delete();
           });// omar jedol / Codes
           omar.reply("`تم حذف جميع الرتب بنجاح`")
           }// omar jedol / Codes
           });













    client.on('message', message => {
                 if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'Pr')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
     if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
       let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
       let copy = "Prince Bot™ Bot";
       let request = `Requested By ${message.author.username}`;
       if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
       msg.react('✅')
       .then(() => msg.react('❌'))
       .then(() =>msg.react('✅'))

       let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
       let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
       message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
       message.guild.members.forEach(m => {

     var bc = new
          Discord.RichEmbed()
          .setColor('RANDOM')
          .setTitle('Broadcast')
          .addField('سيرفر', message.guild.name)
          .addField('المرسل', message.author.username)
          .addField('الرسالة', args)
          .setThumbnail(message.author.avatarURL)
          .setFooter(copy, client.user.avatarURL);
       m.send({ embed: bc })
       msg.delete();
       })
       })
       reaction2.on("collect", r => {
       message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
       msg.delete();
       })
       })
       }
       });





       client.on('message', async message => {
         let args = message.content.split(" ");
         if(message.content.startsWith(prefix + "mute")) {
           if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
             msg.delete(3500);
             message.delete(3500);
           });

           if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
             msg.delete(3500);
             message.delete(3500);
           });

           let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
           if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
             msg.delete(3500);
             message.delete(3500);
           });

           if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
             msg.delete(3500);
             message.delete(3500); //kinggamer حقوق الفا كودز و
           });

           if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و

           if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);


           if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
             msg.delete(3500);
             message.delete(3500);
           });

           if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
             msg.delete(3500);
             message.delete(3500); //kinggamer حقوق الفا كودز و
           });

           let duration = args[2];
           if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
             msg.delete(3500);
             message.delete(3500);
           });

           if(isNaN(duration))  message.channel.send('').then(msg => {
             msg.delete(3500);
             message.delete(3500);
           });

           let reason = message.content.split(" ").slice(3).join(" ");
           if(!reason) reason = " [ **لم يذكر لماذا** ] ";

           let thisEmbed = new Discord.RichEmbed()
           .setAuthor(mention.user.username, mention.user.avatarURL)
           .setTitle('**تم آعطائك ميوت**')
           .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
           .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
           .addField('**__آلسبب__**',reason)
           .addField('**__وقت الميوت__**',duration)

           let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
           if(!role) try {
             message.guild.createRole({
               name: "Muted",
               permissions: 0 //kinggamer حقوق الفا كودز و
             }).then(r => {
               message.guild.channels.forEach(c => {
                 c.overwritePermissions(r , {
                   SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
                   READ_MESSAGES_HISTORY: false,
                   ADD_REACTIONS: false
                 });
               });
             }); //kinggamer حقوق الفا كودز و
           } catch(e) {
             console.log(e.stack);
           }
           mention.addRole(role).then(() => {
             mention.send(thisEmbed);
             message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
             mention.setMute(true); //kinggamer حقوق الفا كودز و
           });
           setTimeout(() => {
             if(duration === 0) return;
             mention.setMute(false);
             mention.removeRole(role)
           },duration * 60000); //kinggamer حقوق الفا كودز و
         }
       });
       client.on('message', async message => {
           let mention = message.mentions.members.first();
       let command = message.content.split(" ")[0];
            command = command.slice(prefix.length);
           let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
       if(command === `unmute`) {2
         if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
       if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))

         let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!kinggamer) return message.channel.send('').then(msg => {
             msg.delete(3500);
             message.delete(3500); //kinggamer حقوق الفا كودز و
           });

         let role = message.guild.roles.find (r => r.name === "Muted");

         if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)

         await kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
         message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);

         return;

         }

       });



       client.on('message' , message => {
       if(message.content === '#voice') {
           message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
       }
       });






























client.on("message", async message => {

  if(!message.member.hasPermission("ADMINISTRATOR")) {
    if(/(?:https?:\/)?discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
        message.delete();
        let inviteEmbed = new Discord.RichEmbed()

        .setDescription("__**Auto Suppression**__")
        .addField("> Envoyé par :", `<@${message.author.id}> avec l'ID ${message.author.id}`)
        .addField("> Suppression dans :", message.channel)
        .addField(`> Raison :`, `Envoie une invitation discord : ${message.content}`)
        .setColor(violet);

        let incidentchannel = message.guild.channels.find(`name`, "log");
        if(!incidentchannel) return message.channel.send("⛔ Je n'est pas trouvé le channel 'logs' !");
        return incidentchannel.send(inviteEmbed);
    }
  }
  });



        client.on('message', message => {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;

          let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
          var argresult = message.content.split(" ").slice(1);
        if (command == "sendpic") {
          message.channel.sendFile(argresult.join(" "))

        }
        });

        client.on('message', message => {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;

          let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
          var argresult = message.content.split(" ").slice(1);
        if (command == "sendembedpic") {
            let embedsay = new Discord.RichEmbed()
         .setColor("RANDOM")
        .setDescription("-----------------")
        .setImage(`${argresult}`)
        message.channel.send({embed:embedsay});


        }
        });






        client.on('message', message => {
            if(message.content.includes('discord.gg')){
                                                    if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
                if (!message.member.hasPermissions(['ADMINISTRATOR'])){
                message.delete()
            return message.reply(`** No Invite Links :angry: !**`)
            }
        }
        });

        client.on('message', async msg => {
              client.snek = require('snekfetch');
            var p = "#"
          if(msg.content.startsWith(p + "isay")) {
           let args = msg.content.split(' ').slice(1).join(' ');
          if(!args) return args.missing(msg, 'No text added', this.help);
          msg.channel.startTyping();
          const searchMessage = await msg.channel.send('🖌️Painting...');
          const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
          msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
        };
        });

        client.on('message', message => {
                      if (!message.channel.guild) return;
              if(message.content =='#members')
              var kayan = new Discord.RichEmbed()
              .setThumbnail(message.author.avatarURL)
              .setFooter(message.author.username, message.author.avatarURL)
              .setTitle('🌷| Members info')
              .addBlankField(true)
              .addField('📗| Online',
              `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
              .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
              .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
              .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
              .addField('➡| Server Members',`${message.guild.memberCount}`)
              message.channel.send(kayan);

            });



            client.on('ready', function(){
              client.user.setStatus("dnd");
                var ms = 40000 ;
                var setGame = ['Prince Bot™'];
                var i = -1;
                var j = 0;
                setInterval(function (){
                    if( i == -1 ){
            j = 1;
                   }
                    if( i == (setGame.length)-1 ){
                        j = -1;
                  }
                   i = i+j;
                    client.user.setGame(setGame[i],`http://www.youtube.com//channel/UCYfRHn7YxsSy2GACxOsQNvg?view_as=subscriber`);
            }, ms);

            });

























































            client.on('message', function(message) {
                if(message.content.startsWith(prefix + "report")) {
                    let messageArgs = message.content.split(" ").slice(1).join(" ");
                    let messageReason = message.content.split(" ").slice(2).join(" ");
                    if(!messageReason) return message.reply("**# Specify a reason!**");
                let mUser = message.mentions.users.first();
                if(!mUser) return message.channel.send("Couldn't find user.");
                let Rembed = new Discord.RichEmbed()
                .setTitle("`New Report!`")
                .setThumbnail(message.author.avatarURL)
                .addField("**# - Reported User:**",mUser,true)
                .addField("**# - Reported User ID:**",mUser.id,true)
                .addField("**# - Reason:**",messageReason,true)
                .addField("**# - Channel:**",message.channel,true)
                .addField("**# - Time:**",message.createdAt,true)
                .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
            message.channel.send(Rembed)
            message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
                msg.react("✅")
                msg.react("❌")
            .then(() => msg.react('❌'))
            .then(() =>msg.react('✅'))
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
            let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

            let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
            let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
            reaction1.on("collect", r => {
                message.guild.owner.send(Rembed)
                message.reply("**# - Done! 🎇**");
            })
            reaction2.on("collect", r => {
                message.reply("**# - Canceled!**");
            })
            })
            }
            });


    







client.login(process.env.BOT_TOKEN);
