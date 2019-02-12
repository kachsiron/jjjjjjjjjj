var rarityNames=['Нельзя купить','Очень низкая','Низкая','Средняя','Высокая','Очень высокая'];
var listDiv=document.createElement('DIV');
listDiv.style.margin='0 auto';
listDiv.style.width='500px';
listDiv.style.border='1px solid white';
listDiv.style.borderRadius='15px';
listDiv.style.padding='15px';
for(let i=0,l=W.length,mainDiv,tempDiv,imgDiv,img,w,iw,ih;i<l;i++){
	w=W[i];
	if(w.xml.includes('BOSS'))continue;
	if(w.title==='...')continue;
	mainDiv=document.createElement('DIV');
	mainDiv.style.clear='both';
	mainDiv.style.padding='15px';
	mainDiv.style.margin='0 0 15px 0';
	mainDiv.style.backgroundColor='#FFF';
	mainDiv.style.borderRadius='15px';
	tempDiv=document.createElement('DIV');
	tempDiv.style.textAlign='center';
	tempDiv.style.fontSize='150%';
	tempDiv.style.marginBottom='15px';
	tempDiv.textContent=w.title;
	mainDiv.appendChild(tempDiv);
	
	img=document.createElement('IMG');
	tempDiv=document.createElement('DIV');
	imgDiv=document.createElement('DIV');
	imgDiv.style.width='120px';
	imgDiv.style.height='180px';
	imgDiv.style.cssFloat='right';
	imgDiv.style.textAlign='center';
	imgDiv.style.marginTop='5px';
	tempDiv.style.overflow='hidden';
	tempDiv.style.display='inline-block';
	if(A.hasOwnProperty(w.weaponArt)){
		iw=A[w.weaponArt].fw;
		ih=A[w.weaponArt].fh;
		if(ih<150){
			iw/=ih/150;
			iw=Math.round(iw);
			ih=150
		}
		else if(ih>80){
			iw/=ih/80;
			iw=Math.round(iw);
			ih=80
		}
		img.src=A[w.weaponArt].png;
		//img.style.backgroundRepeat='no-repeat';
		//img.style.backgroundSize=iw+'px '+ih+'px';
		//img.style.backgroundPosition=;
		//img.style.width=iw+'px';
		img.style.height=ih+'px';
		tempDiv.style.width=(iw-1)+'px';
		
	}
	imgDiv.appendChild(tempDiv);
	tempDiv.appendChild(img);
	mainDiv.appendChild(imgDiv);
	
	if(w.hasOwnProperty('damage')&&w.damage>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Урон: '+w.damage;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('sp')&&w.sp>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Пробитие щитов: '+w.sp;
		mainDiv.appendChild(tempDiv);
	}
	
	tempDiv=document.createElement('DIV');
	tempDiv.textContent='Скорость снаряда/луча: '+(w.hasOwnProperty('speed')?w.speed:'70-80');
	mainDiv.appendChild(tempDiv);
	
	if(w.hasOwnProperty('shots')&&w.shots>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Снарядов в залпе: '+w.shots;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('cost')&&w.cost>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Стоимость: '+w.cost;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('power')&&w.power>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Потребляемая мощность: '+w.power;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('missiles')&&w.missles>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Расход ракет: '+w.missiles;
		mainDiv.appendChild(tempDiv);
	}

	if(w.hasOwnProperty('cooldown')&&w.cooldown>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Перезарядка: '+w.cooldown+' сек.';
		mainDiv.appendChild(tempDiv);
	}

	if(w.hasOwnProperty('persDamage')&&w.persDamage>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Урон по экипажу: '+w.persDamage;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('stun')&&w.stun>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Оглушение экипажа: '+w.stun;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('sysDamage')&&w.sysDamage>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Урон по системе: '+w.sysDamage;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('ion')&&w.ion>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Ионный урон: '+w.ion;
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('breachChance')&&w.breachChance>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Вероятность пробития: '+w.breachChance*10+'%';
		mainDiv.appendChild(tempDiv);
	}
	
	if(w.hasOwnProperty('fireChance')&&w.fireChance>0){
		tempDiv=document.createElement('DIV');
		tempDiv.textContent='Вероятность поджога: '+w.fireChance*10+'%';
		mainDiv.appendChild(tempDiv);
	}
	
	tempDiv=document.createElement('DIV');
	tempDiv.textContent='Редкость: '+rarityNames[w.rarity];
	mainDiv.appendChild(tempDiv);
	
	tempDiv=document.createElement('DIV');
	tempDiv.style.fontSize='75%';
	tempDiv.style.marginTop='5px';
	tempDiv.textContent=w.desc;
	mainDiv.appendChild(tempDiv);
	
	listDiv.appendChild(mainDiv)
}
document.body.appendChild(listDiv)