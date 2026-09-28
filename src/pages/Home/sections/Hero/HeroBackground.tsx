import React from "react";
import styles from "./HeroBackground.module.scss";

export const HeroBackground: React.FC = () => {
    return (
        <div className={styles.backgroundWrapper}>
            <div className={styles.techGrid} />
            <div className={styles.heroGlow} />

            {/* --- ÚNICA LINHA DE CÓDIGOS CORRENDO PARA A ESQUERDA (PRÓXIMO AO HEADER) --- */}
            <div className={styles.tickerTrack}>
                <div className={styles.tickerItem}><span>$</span> systemctl status core-api.service --active</div>
                <div className={styles.tickerItem}><span>POST</span> /api/v1/auth/token 200 OK (14ms)</div>
                <div className={styles.tickerItem}><span>const</span> stack = [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;];</div>
                <div className={styles.tickerItem}><span>Docker</span> container running on port 3000 [OK]</div>
                <div className={styles.tickerItem}><span>git</span> commit -m &quot;refactor: optimize database indexes&quot;</div>
                <div className={styles.tickerItem}><span>SaaS</span> architecture deployed to Edge Network</div>
                {/* Duplicado para loop perfeito */}
                <div className={styles.tickerItem}><span>$</span> systemctl status core-api.service --active</div>
                <div className={styles.tickerItem}><span>POST</span> /api/v1/auth/token 200 OK (14ms)</div>
                <div className={styles.tickerItem}><span>const</span> stack = [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;];</div>
                <div className={styles.tickerItem}><span>Docker</span> container running on port 3000 [OK]</div>
                <div className={styles.tickerItem}><span>git</span> commit -m &quot;refactor: optimize database indexes&quot;</div>
                <div className={styles.tickerItem}><span>SaaS</span> architecture deployed to Edge Network</div>
            </div>
        </div>
    );
};